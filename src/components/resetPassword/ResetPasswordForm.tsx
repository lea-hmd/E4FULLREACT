import React from 'react'
import {
    Button,
    Grid,
    TextField,
    CardContent,
    Card,
    CardActions,
    Theme,
    FormHelperText,
    Typography,
} from '@mui/material'

import { Link } from 'react-router-dom'

type ResetPasswordFormProps = {
    theme: Theme
}

export default function ResetPasswordForm({ theme }: ResetPasswordFormProps) {
    const [email, setEmail] = React.useState('')
    const [isEmail, setIsEmail] = React.useState(false)
    const [resetConfirmation, setResetConfirmation] = React.useState(false)

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

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Card
                sx={{
                    backgroundColor: theme.palette.secondary.dark,
                    maxWidth: {
                        xs: '90%',
                        sm: '70%',
                        md: '50%',
                    },
                }}
            >
                <CardContent>
                    {resetConfirmation ? (
                        <Grid m={2}>
                            <Typography fontWeight="bold" textAlign="center">
                                Un mail contenant un lien de réinitialisation du
                                mot de passe vient de vous être envoyé. Veuillez
                                cliquer sur le lien et suivre les étapes de
                                réinitialisation du mot de passe. (Pensez à
                                vérifier votre courrier indésirable)
                            </Typography>
                        </Grid>
                    ) : (
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            mb={1}
                        >
                            <Grid item xs={12}>
                                <>
                                    <TextField
                                        fullWidth
                                        type="email"
                                        value={email}
                                        label="E-mail"
                                        variant="outlined"
                                        onChange={handleChange}
                                    />
                                    {!isEmail && (
                                        <FormHelperText error>
                                            Veuillez saisir un e-mail valide
                                        </FormHelperText>
                                    )}
                                </>
                            </Grid>
                        </Grid>
                    )}
                </CardContent>

                <CardActions>
                    <Grid container alignItems="center" sx={{ mx: 1, mb: 1 }}>
                        <Grid container justifyContent="center">
                            {resetConfirmation ? (
                                <Button
                                    component={Link}
                                    to="/"
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Retour à l'accueil
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    onClick={() => setResetConfirmation(true)}
                                    color="primary"
                                    disabled={isEmail ? false : true}
                                    sx={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Réinitialiser
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    )
}
