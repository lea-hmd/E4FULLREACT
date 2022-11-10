import React from 'react'
import CustomContainer from '../components/common/custom/CustomContainer'
import { SectionTitle } from '../components/common/custom/CustomTitles'
import LoginForm from '../components/login/LoginForm'
import { useTheme } from '@mui/material/styles'

export default function Login() {
    const theme = useTheme()
    return (
        <>
            <CustomContainer>
                <SectionTitle title="Connexion" />
                <LoginForm {...{ theme }} />
            </CustomContainer>
        </>
    )
}
