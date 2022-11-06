import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { RequestType } from '../shared/types/RequestType'
import request from '../api/Request'

export default function Signin() {
    const style = {
        mt: '0.5rem',
        mb: '0.5rem',
    }

    const [email, setEmail] = useState<string | null>('')
    const [password, setPassword] = useState<string | null>('')
    const [firstname, setFirstname] = useState<string | null>('')
    const [lastname, setLastname] = useState<string | null>('')
    const [phone, setPhone] = useState<string | null>('')
    const [address, setAddress] = useState<string | null>('')
    const [zipCode, setZipCode] = useState<string | null>('')
    const [city, setCity] = useState<string | null>('')
    const [country, setCountry] = useState<string | null>('')
    const [identificalFile, setIdentificalFile] = useState<File | null>(null)
    const [profilePicture, setProfilePicture] = useState<File | null>(null)

    async function register() {
        const requestParams: RequestType = {
            endpoint: '/registration',
            method: 'POST',
            body: {
                email,
                password,
                firstname,
                lastname,
                phone,
                address,
                zip_code: zipCode,
                city,
                country,
                identifical_file: identificalFile,
                profile_picture: profilePicture,
            },
        }
        try {
            await request(requestParams).then((response) => response.json())
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
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

            <input
                type="file"
                onChange={(e) =>
                    e.target.files && setIdentificalFile(e.target.files[0])
                }
            />

            <input
                type="file"
                onChange={(e) => {
                    // eslint-disable-next-line no-console
                    console.log(e.target.files)
                    e.target.files && setProfilePicture(e.target.files[0])
                    // eslint-disable-next-line no-console
                    console.log(profilePicture?.name)
                }}
            />

            <Button
                //Change style
                onClick={() => register()}
                sx={{
                    backgroundColor: 'white',
                    width: '80%',
                    margin: '3rem auto',
                    color: '#051F38',
                }}
            >
                S'inscrire
            </Button>
        </Grid>
    )
}
