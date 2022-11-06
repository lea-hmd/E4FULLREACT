import CustomContainer from '../components/common/custom/CustomContainer'
import { SectionTitle } from '../components/common/custom/CustomTitles'
import LoginForm from '../components/login/LoginForm'
import { Theme } from '@mui/material'

type LoginProps = {
    theme: Theme
}

export default function Login({ theme }: LoginProps) {
    return (
        <>
            <CustomContainer>
                <SectionTitle title="Connexion" />
                <LoginForm {...{ theme }} />
            </CustomContainer>
        </>
    )
}
