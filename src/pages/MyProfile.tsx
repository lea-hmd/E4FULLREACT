import { Grid, TextField, Button } from '@mui/material'
import React, { useState } from 'react'

export default function Signin() {
    const style = {
        mt: '0.5rem',
        mb: '0.5rem',
    }
    // function updateProfil() {}
    const [email, setEmail] = useState<string | null>('')
    const [password, setPassword] = useState<string | null>('')
    const [firstname, setFirstname] = useState<string | null>('')
    const [lastname, setLastname] = useState<string | null>('')
    const [phone, setPhone] = useState<string | null>('')
    const [address, setAddress] = useState<string | null>('')
    const [zipCode, setZipCode] = useState<string | null>('')
    const [city, setCity] = useState<string | null>('')
    const [country, setCountry] = useState<string | null>('')
    // const [identificalFile, setIdentificalFile] = useState<File | null>(null)
    // const [profilePicture, setProfilePicture] = useState<File | null>(null)

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
                defaultValue={lastname}
                onChange={(e) => setLastname(e.target.value)}
            />
            <TextField
                sx={style}
                name="firstname"
                id="fisrtname"
                label="Prénom"
                defaultValue={firstname}
                onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
                sx={style}
                name="password"
                id="password"
                label="Mot de passe"
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
                sx={style}
                name="mail"
                id="mail"
                label="E-mail"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                sx={style}
                name="phone"
                id="phone"
                label="Téléphone"
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
                sx={style}
                name="adresse"
                id="adresse"
                label="Adresse Postale"
                defaultValue={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
                sx={style}
                name="postalcode"
                id="postalcode"
                label="Code Postal"
                defaultValue={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
            />
            <TextField
                sx={style}
                name="city"
                id="city"
                label="Ville"
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <TextField
                sx={style}
                name="country"
                id="country"
                label="Pays"
                defaultValue={country}
                onChange={(e) => setCountry(e.target.value)}
            />

            {/* <input
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
            /> */}

            <Button
                //Change style
                // onClick={() => updateProfil()}
                sx={{
                    backgroundColor: 'white',
                    width: '80%',
                    margin: '3rem auto',
                    color: '#051F38',
                }}
            >
                Appliquer les modifications
            </Button>
        </Grid>
    )
}
