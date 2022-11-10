import React, { createContext, useContext, useReducer } from 'react'

type AuthProviderType = {
    children: React.ReactNode
}

type InitialStateType = {
    token: string
    loggedIn: boolean
}

type ContextType = {
    state: InitialStateType
    dispatch: React.Dispatch<{ type: string; payload?: any }>
}
const initialState = {
    token: '',
    loggedIn: false,
}

export const AuthContext = createContext<ContextType>({} as ContextType)
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const localState = JSON.parse(localStorage.getItem('authState')!)

export const authReducer = (state: InitialStateType, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload,
                loggedIn: true,
            }

        case 'LOGOUT':
            return {
                ...state,
                token: '',
                loggedIn: false,
            }

        default:
            return state
    }
}

export const AuthProvider = ({ children }: AuthProviderType) => {
    const [state, dispatch] = useReducer(
        authReducer,
        localState || initialState
    )

    React.useEffect(() => {
        localStorage.setItem('authState', JSON.stringify(state))
    }, [state])

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
