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
    id: number
    theme: Theme
    title: string
    description: string
    price: number
    category: string
    product_picture: any
    created_at: string
    myOffer: boolean
    handleOpenDeleteDialog?: () => void
}

export default function OfferCard({
    id,
    theme,
    title,
    description,
    price,
    category,
    product_picture,
    created_at,
    myOffer,
    handleOpenDeleteDialog,
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
                image={product_picture == null ? noImage : product_picture}
                alt="Image de l'offre"
            />
            <CardContent>
                <Chip
                    size="small"
                    icon={categoryIcon({
                        machine_name: category,
                        iconSize,
                    })}
                    label={categoryName(category)}
                    sx={{ px: 1, mb: 2 }}
                />
                <Typography
                    noWrap
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                >
                    {title}
                </Typography>
                <Typography noWrap gutterBottom variant="body2" color="primary">
                    {description ?? 'Pas de description'}
                </Typography>
                <Typography
                    mt={1.5}
                    variant="body1"
                    color="primary"
                    fontWeight="bold"
                >
                    {price} €
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
                            {moment(created_at).format('DD/MM/YYYY')}
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
                                    to={'/annonce/' + id}
                                >
                                    <Info />
                                </IconButton>
                                <IconButton>
                                    <Edit />
                                </IconButton>
                                <IconButton onClick={handleOpenDeleteDialog}>
                                    <Delete />
                                </IconButton>
                            </>
                        ) : (
                            <Button
                                component={Link}
                                to={'/annonce/' + id}
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
