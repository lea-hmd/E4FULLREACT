import React from 'react'
import { useTheme } from '@mui/material/styles'
import CustomContainer from '../components/common/custom/CustomContainer'
import { SectionTitle } from '../components/common/custom/CustomTitles'
import ResetPasswordForm from '../components/resetPassword/ResetPasswordForm'

export default function ResetPassword() {
    const theme = useTheme()
    return (
        <CustomContainer>
            <SectionTitle title="Réinitialiser votre mot de passe" />
            <ResetPasswordForm {...{ theme }} />
        </CustomContainer>
    )
}
