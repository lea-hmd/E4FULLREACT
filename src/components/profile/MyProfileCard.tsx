import { Card, CardContent, Grid, Theme, Typography } from '@mui/material'
import noImage from '../../assets/images/noImage.jpg'
import React from 'react'

type ProfileDetailsCardProps = {
    theme: Theme
    profile: {
        email: string
        firstname: string
        lastname: string
        phone: string
        address: string
        zip_code: string
        city: string
        country: string
        created_at: string
        updated_at: string
        identifical_file?: any
        profile_picture?: any
    } | null
}

export default function MyProfileCard({
    theme,
    profile,
}: ProfileDetailsCardProps) {
    if (profile == null) {
        return (
            <Typography
                variant="h5"
                sx={{ textAlign: 'center', margin: 'auto' }}
            >
                Erreur lors du chargement du Profil...
            </Typography>
        )
    }
    return (
        <Card
            sx={{
                backgroundColor: theme.palette.secondary.dark,
                width: '70%',
                margin: 'auto',
            }}
        >
            <CardContent>
                <Grid container alignItems="center">
                    <Grid item md={6} container alignItems="center">
                        <img
                            width="90%"
                            src={
                                profile?.profile_picture == null
                                    ? noImage
                                    : profile?.profile_picture
                            }
                            alt="Image du profile"
                        />
                    </Grid>
                    <Grid item md={6} container alignItems="center">
                        <img
                            width="90%"
                            src={
                                profile.identifical_file == null
                                    ? noImage
                                    : profile.identifical_file
                            }
                            alt="Carte d'identité"
                        />
                    </Grid>
                    <Grid item container md={6}>
                        <Grid item md={6} container alignItems="center">
                            <Grid item xs={12}>
                                <Typography
                                    noWrap
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    color="primary"
                                >
                                    {profile.firstname}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    noWrap
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    color="primary"
                                >
                                    {profile.lastname}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    mt={1.5}
                                    variant="body1"
                                    color="primary"
                                    fontWeight="bold"
                                >
                                    Téléphone : {profile.phone}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    mt={1.5}
                                    variant="body1"
                                    color="primary"
                                    fontWeight="bold"
                                >
                                    Adresse : {profile.address}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    mt={1.5}
                                    variant="body1"
                                    color="primary"
                                    fontWeight="bold"
                                >
                                    Ville : {profile.city}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    mt={1.5}
                                    variant="body1"
                                    color="primary"
                                    fontWeight="bold"
                                >
                                    Code Postal : {profile.zip_code}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    mt={1.5}
                                    variant="body1"
                                    color="primary"
                                    fontWeight="bold"
                                >
                                    Pays : {profile.country}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    mt={1.5}
                                    variant="body1"
                                    color="primary"
                                    fontWeight="bold"
                                >
                                    Crée le : {profile.created_at}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    mt={1.5}
                                    variant="body1"
                                    color="primary"
                                    fontWeight="bold"
                                >
                                    Modifié le : {profile.updated_at}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
