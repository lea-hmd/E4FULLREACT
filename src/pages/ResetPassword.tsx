import React from 'react'
import { Theme } from '@mui/material'
import CustomContainer from '../components/common/custom/CustomContainer'
import { SectionTitle } from '../components/common/custom/CustomTitles'
import ResetPasswordForm from '../components/resetPassword/ResetPasswordForm'

type ResetPasswordProps = {
    theme: Theme
}

export default function ResetPassword({ theme }: ResetPasswordProps) {
    return (
        <CustomContainer>
            <SectionTitle title="Réinitialiser votre mot de passe" />
            <ResetPasswordForm {...{ theme }} />
        </CustomContainer>
    )
}
