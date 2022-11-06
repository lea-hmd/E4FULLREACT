import React from 'react'
import CustomContainer from '../components/common/custom/CustomContainer'
import { SectionTitle } from '../components/common/custom/CustomTitles'
import LoginForm from '../components/login/LoginForm'
import { useTheme } from '@mui/material/styles'

type LoginProps = {
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Login({ setLoggedIn }: LoginProps) {
    const theme = useTheme()
    return (
        <>
            <CustomContainer>
                <SectionTitle title="Connexion" />
                <LoginForm {...{ theme, setLoggedIn }} />
            </CustomContainer>
        </>
    )
}
