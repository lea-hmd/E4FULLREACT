import React from 'react'
import {
    Button,
    Grid,
    Link as MuiLink,
    TextField,
    CardContent,
    Card,
    CardActions,
    Theme,
    FormControl,
    InputLabel,
    OutlinedInput,
    IconButton,
    InputAdornment,
    FormHelperText,
} from '@mui/material'

import { useNavigate, Link } from 'react-router-dom'
import request from '../../api/Request'
import { LoginBody } from '../../shared/types/LoginBody'
import { RequestType } from '../../shared/types/RequestType'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

type LoginFormProps = {
    theme: Theme
}

export default function LoginForm({ theme }: LoginFormProps) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)
    const [isEmail, setIsEmail] = React.useState(false)

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email)
    }

    const handleChange = (event: React.BaseSyntheticEvent) => {
        if (!isValidEmail(event.target.value)) {
            setIsEmail(false)
        } else {
            setIsEmail(true)
        }

        setEmail(event.target.value)
    }

    const navigate = useNavigate()

    const requestBody: LoginBody = {
        email,
        password,
    }

    const requestParams: RequestType = {
        endpoint: '/login',
        method: 'POST',
        body: requestBody,
    }

    async function login() {
        try {
            await request(requestParams)
                .then((response) => response.json())
                .then((data) => {
                    if (data.token) {
                        localStorage.setItem('Token', data.token.token)
                        navigate('/')
                    }
                })
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
    }

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Card
                sx={{
                    backgroundColor: theme.palette.secondary.dark,
                }}
            >
                <CardContent>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        mb={1}
                    >
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="email"
                                value={email}
                                label="E-mail"
                                variant="outlined"
                                onChange={handleChange}
                            />
                            {isEmail ? (
                                ''
                            ) : (
                                <FormHelperText error>
                                    Veuillez saisir un e-mail valide
                                </FormHelperText>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                sx={{ width: '100%' }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Mot de passe
                                </InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    label="Mot de passe"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <MuiLink
                        component={Link}
                        to="/reinitialiser-mot-de-passe"
                        underline="none"
                    >
                        Mot de passe oublié ?
                    </MuiLink>
                </CardContent>
                <CardActions>
                    <Grid container alignItems="center" sx={{ mx: 1, mb: 1 }}>
                        <Grid container justifyContent="center">
                            <Button
                                variant="contained"
                                onClick={login}
                                color="primary"
                                disabled={isEmail ? false : true}
                            >
                                Se connecter
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    )
}
