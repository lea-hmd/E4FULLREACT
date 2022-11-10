import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { RequestType } from '../shared/types/RequestType'
import request from '../api/Request'

export default function Signin() {
    const style = {
        mt: '0.5rem',
        mb: '0.5rem',
    }

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [firstname, setFirstname] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [zipCode, setZipCode] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [identificalFile, setIdentificalFile] = useState<File | null>(null)
    const [profilePicture, setProfilePicture] = useState<File | null>(null)

    const handleIdentificalChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.files && event.target.files[0]) {
            setIdentificalFile(event.target.files[0])
        }
    }
    const handleRemoveIdentifical = () => {
        setIdentificalFile(null)
    }

    const handleProfilChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setProfilePicture(event.target.files[0])
        }
    }
    const handleRemoveProfil = () => {
        setProfilePicture(null)
    }

    // async function register() {
    //     const requestParams: RequestType = {
    //         endpoint: '/registration',
    //         method: 'POST',
    //         body: {
    //             email,
    //             password,
    //             firstname,
    //             lastname,
    //             phone,
    //             address,
    //             zip_code: zipCode,
    //             city,
    //             country,
    //             identifical_file: identificalFile,
    //             profile_picture: profilePicture,
    //         },
    //     }
    //     try {
    //         await request(requestParams).then((response) => response.json())
    //     } catch (error: any) {
    //         // eslint-disable-next-line no-console
    //         console.log(error)
    //     }
    // }
    const handleSigninSubmit = async () => {
        const body = new FormData()

        body.append('email', email)
        body.append('password', password)
        body.append('firstname', firstname)
        body.append('lastname', lastname)
        body.append('phone', phone)
        body.append('address', address)
        body.append('zip_code', zipCode)
        body.append('city', city)
        body.append('country', country)
        if (identificalFile) {
            body.append('identifical_file', identificalFile)
        }
        if (profilePicture) {
            body.append('profile_picture', profilePicture)
        }
        const requestParams: RequestType = {
            endpoint: '/registration',
            method: 'POST',
            body,
        }
        await request(requestParams)
    }
    return (
        <Grid
            container
            style={{
                margin: 'auto',
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TextField
                sx={style}
                name="lastname"
                id="lastname"
                label="Nom"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
            />
            <TextField
                sx={style}
                name="firstname"
                id="fisrtname"
                label="Prénom"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
                sx={style}
                name="password"
                id="password"
                label="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
                sx={style}
                name="mail"
                id="mail"
                label="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                sx={style}
                name="phone"
                id="phone"
                label="Téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
                sx={style}
                name="adresse"
                id="adresse"
                label="Adresse Postale"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
                sx={style}
                name="postalcode"
                id="postalcode"
                label="Code Postal"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
            />
            <TextField
                sx={style}
                name="city"
                id="city"
                label="Ville"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <TextField
                sx={style}
                name="country"
                id="country"
                label="Pays"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />
            <Grid xs={12}>
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    alignItems="center"
                    m={1}
                    p={2}
                    sx={{ border: '1px solid white', flexDirection: 'column' }}
                >
                    <Typography variant="h6">Identifical File :</Typography>
                    {!identificalFile && (
                        <Grid
                            item
                            md={6}
                            container
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Button variant="contained" component="label">
                                Télécharger une photo
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={handleIdentificalChange}
                                />
                            </Button>
                        </Grid>
                    )}
                    {identificalFile && (
                        <Grid
                            item
                            md={6}
                            container
                            justifyContent="center"
                            alignItems="center"
                        >
                            <img
                                src={URL.createObjectURL(identificalFile)}
                                width="80%"
                                alt="Aperçu du fichier téléchargé"
                            />
                            <Button
                                sx={{
                                    m: 2,
                                }}
                                size="small"
                                variant="contained"
                                onClick={handleRemoveIdentifical}
                            >
                                Supprimer l'image
                            </Button>
                        </Grid>
                    )}
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    alignItems="center"
                    m={1}
                    p={2}
                    sx={{ border: '1px solid white', flexDirection: 'column' }}
                >
                    <Typography variant="h6">Profile Picture :</Typography>
                    {!profilePicture && (
                        <Grid
                            item
                            md={6}
                            container
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Button variant="contained" component="label">
                                Télécharger une photo
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={handleProfilChange}
                                />
                            </Button>
                        </Grid>
                    )}
                    {profilePicture && (
                        <Grid
                            item
                            md={6}
                            container
                            justifyContent="center"
                            alignItems="center"
                        >
                            <img
                                src={URL.createObjectURL(profilePicture)}
                                width="80%"
                                alt="Aperçu du fichier téléchargé"
                            />
                            <Button
                                sx={{
                                    m: 2,
                                }}
                                size="small"
                                variant="contained"
                                onClick={handleRemoveProfil}
                            >
                                Supprimer l'image
                            </Button>
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Button
                //Change style
                variant="contained"
                onClick={() => handleSigninSubmit()}
                sx={{
                    margin: '3rem auto',
                    width: '50%',
                }}
            >
                S'inscrire
            </Button>
        </Grid>
    )
}
