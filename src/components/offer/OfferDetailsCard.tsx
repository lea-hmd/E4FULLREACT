import {
    Chip,
    Link as MuiLink,
    Theme,
    Avatar,
    Grid,
    Typography,
    Card,
    CardContent,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../../assets/images/noImage.jpg'
import { categoryIcon, categoryName } from '../common/utils/utils'

type OfferDetailsCardProps = {
    theme: Theme
    offer: {
        title: string
        description?: string
        price: number
        category: string
        product_picture: any
        Author?: {
            id: number
            firstname?: string
            lastname?: string
            profile_picture?: any
        }
        Status?: { label?: string }
    } | null
}
export default function OfferDetailsCard({
    theme,
    offer,
}: OfferDetailsCardProps) {
    const iconSize = 'medium'
    if (offer == null) {
        return (
            <Typography
                variant="h5"
                sx={{ textAlign: 'center', margin: 'auto' }}
            >
                Erreur lors du chargement de l'offre...
            </Typography>
        )
    }
    return (
        <>
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
                                    offer.product_picture == null
                                        ? noImage
                                        : offer.product_picture
                                }
                                alt="Image de l'annonce"
                            />
                        </Grid>
                        <Grid item container md={6}>
                            <Grid item md={6} container alignItems="center">
                                <Grid item xs={12}>
                                    <Chip
                                        size="small"
                                        icon={categoryIcon({
                                            machine_name: offer.category,
                                            iconSize,
                                        })}
                                        label={categoryName(offer.category)}
                                        sx={{ px: 1, mb: 2 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        noWrap
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        color="primary"
                                    >
                                        Titre : {offer.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        noWrap
                                        gutterBottom
                                        variant="body2"
                                        color="primary"
                                    >
                                        Description :{' '}
                                        {offer.description ??
                                            'Pas de description'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        mt={1.5}
                                        variant="body1"
                                        color="primary"
                                        fontWeight="bold"
                                    >
                                        Prix : {offer.price} €
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        mt={1.5}
                                        variant="body1"
                                        color="primary"
                                        fontWeight="bold"
                                    >
                                        Statut :{' '}
                                        {offer.Status?.label ??
                                            'Statut inconnu'}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                md={12}
                                container
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid item>
                                    <Avatar
                                        alt="Photo de profil de l'annonceur"
                                        src={
                                            offer.Author?.profile_picture ===
                                                undefined ||
                                            offer.Author?.profile_picture ===
                                                null
                                                ? noImage
                                                : offer.Author?.profile_picture
                                        }
                                        sx={{ width: 70, height: 70, my: 3 }}
                                    />
                                </Grid>

                                <Grid item>
                                    <Typography
                                        noWrap
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        color="primary"
                                    >
                                        {offer.Author?.firstname ??
                                            "Prénom de l'auteur inconnu"}{' '}
                                        {offer.Author?.lastname ??
                                            "Nom de l'auteur inconnu"}
                                    </Typography>
                                    <MuiLink
                                        component={Link}
                                        to={'/profil/' + offer.Author?.id}
                                        underline="hover"
                                    >
                                        Voir le profil
                                    </MuiLink>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}
