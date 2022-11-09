import { useState } from 'react'

export const useLocalStorage = () => {
    const [value, setValue] = useState<string | null>(null)

    const setToken = (value: string) => {
        localStorage.setItem('Token', value)
        setValue(value)
    }

    const getToken = () => {
        const value = localStorage.getItem('Token')
        setValue(value)
        return value
    }

    const removeToken = () => {
        localStorage.removeItem('Token')
        setValue(null)
    }

    return { value, setToken, getToken, removeToken }
}
