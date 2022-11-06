import { Button, Grid, Link, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import request from '../api/Request'
import { LoginBody } from '../shared/types/LoginBody'
import { RequestType } from '../shared/types/RequestType'

export default function Login() {
    const style = {
        mt: '0.5rem',
        mb: '0.5rem',
    }
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const navigate = useNavigate()

    const requestBody: LoginBody = {
        email,
        password,
    }
    const requestParams: RequestType = {
        endpoint: '/login',
        method: 'POST',
        body: requestBody,
        //Ajout d'headers supplémentaires si route protégée ou si besoin

        //    customHeaders: {
        //        Authorization: `Bearer ${token}`,
        //    },
    }
    async function login() {
        try {
            await request(requestParams)
                .then((response) => response.json())
                .then((data) => {
                    if (data.token) {
                        localStorage.setItem('Token', data.token.token)
                    }
                })
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
        navigate('/')
    }
    return (
        <>
            <div>
                <h1>Connexion</h1>
            </div>
            <Grid
                container
                sx={{ flexDirection: 'column', margin: 'auto', width: '40%' }}
            >
                <TextField
                    sx={style}
                    id="outlined-basic"
                    value={email}
                    label="E-mail"
                    variant="outlined"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <TextField
                    sx={style}
                    id="outlined-basic"
                    type="password"
                    value={password}
                    label="Mot de passe"
                    variant="outlined"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <Link href="/ForgotPassword" underline="hover">
                    {'Mot de passe oublié'}
                </Link>
                <Button
                    variant="outlined"
                    sx={{ margin: '2rem auto', width: '80%' }}
                    onClick={login}
                >
                    Se connecter
                </Button>
            </Grid>
        </>
    )
}
