import React from 'react'
import CustomContainer from '../components/common/custom/CustomContainer'
import { SectionTitle } from '../components/common/custom/CustomTitles'
import LoginForm from '../components/login/LoginForm'
import { Theme } from '@mui/material'

type LoginProps = {
    theme: Theme
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Login({ theme, setLoggedIn }: LoginProps) {
    return (
        <>
            <CustomContainer>
                <SectionTitle title="Connexion" />
                <LoginForm {...{ theme, setLoggedIn }} />
            </CustomContainer>
        </>
    )
}
