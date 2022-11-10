/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    Chip,
    Typography,
    CardActions,
    Button,
    Theme,
    Grid,
    IconButton,
} from '@mui/material'
import { Info, Edit, Delete } from '@mui/icons-material'

import { Link } from 'react-router-dom'
import moment from 'moment'

import noImage from '../../assets/images/noImage.jpg'
import { categoryIcon, categoryName } from '../common/utils/utils'

type OfferCardProps = {
    theme: Theme
    offer: any
    myOffer: boolean
    handleOpenDeleteDialog?: () => void
    handleClickOpen?: (offer: any) => void
}

export default function OfferCard({
    offer,
    theme,
    myOffer,
    handleOpenDeleteDialog,
    handleClickOpen,
}: OfferCardProps) {
    const iconSize = 'medium'

    return (
        <Card
            sx={{
                backgroundColor: theme.palette.secondary.dark,
                width: '17em',
                '&:hover': {
                    filter: 'brightness(80%)',
                    cursor: 'pointer',
                },
            }}
        >
            {/* TODO: Léa - Add Link component to card */}
            <CardMedia
                component="img"
                height="170"
                image={
                    offer!.product_picture == null
                        ? noImage
                        : offer!.product_picture
                }
                alt="Image de l'offre"
            />
            <CardContent>
                <Chip
                    size="small"
                    icon={categoryIcon({
                        machine_name: offer!.category,
                        iconSize,
                    })}
                    label={categoryName(offer!.category)}
                    sx={{ px: 1, mb: 2 }}
                />
                <Typography
                    noWrap
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                >
                    {offer!.title}
                </Typography>
                <Typography noWrap gutterBottom variant="body2" color="primary">
                    {offer!.description ?? 'Pas de description'}
                </Typography>
                <Typography
                    mt={1.5}
                    variant="body1"
                    color="primary"
                    fontWeight="bold"
                >
                    {offer!.price} €
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container alignItems="center" sx={{ mx: 1, mb: 1 }}>
                    <Grid item xs={6}>
                        <Typography
                            variant="body1"
                            color="primary"
                            fontWeight="bold"
                        >
                            {moment(offer!.created_at).format('DD/MM/YYYY')}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        container
                        justifyContent="flex-end"
                        flexDirection={'row'}
                    >
                        {myOffer ? (
                            <>
                                <IconButton
                                    component={Link}
                                    to={'/annonce/' + offer!.id}
                                >
                                    <Info />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleClickOpen?.(offer)}
                                >
                                    <Edit />
                                </IconButton>
                                <IconButton onClick={handleOpenDeleteDialog}>
                                    <Delete />
                                </IconButton>
                            </>
                        ) : (
                            <Button
                                component={Link}
                                to={'/annonce/' + offer!.id}
                                variant="contained"
                                size="small"
                                color="primary"
                            >
                                Détails
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}
