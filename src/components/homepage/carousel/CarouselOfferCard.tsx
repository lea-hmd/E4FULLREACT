import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Theme,
    IconButton,
    Grid,
    Link as MuiLink,
} from '@mui/material'
import { Info } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { categoryIcon } from '../../common/utils/utils'
import noImage from '../../../assets/images/noImage.jpg'

type CarouselOfferCardProps = {
    id: number
    theme: Theme
    title: string
    price: number
    category: string
    product_picture: any
}

export default function CarouselOfferCard({
    id,
    theme,
    title,
    price,
    product_picture,
    category,
}: CarouselOfferCardProps) {
    const iconSize = 'small'
    return (
        <MuiLink component={Link} to={'/annonce/' + id} underline="none">
            {/* TODO: Léa - Fix redirection */}
            <Card
                sx={{
                    backgroundColor: theme.palette.secondary.dark,
                    width: '12em',
                    height: '15em',
                    '&:hover': {
                        filter: 'brightness(80%)',
                        cursor: 'pointer',
                    },
                    m: 1,
                }}
            >
                <CardMedia
                    component="img"
                    height="130"
                    image={product_picture == null ? noImage : product_picture}
                    alt="Image de l'offre"
                />

                <CardContent>
                    <Typography
                        noWrap
                        gutterBottom
                        variant="h6"
                        component="div"
                        color="primary"
                    >
                        {title}
                    </Typography>

                    <Grid container alignItems="center" m={0.5}>
                        <Grid item container justifyContent="flex-start" xs={4}>
                            <IconButton>
                                {categoryIcon({
                                    machine_name: category,
                                    iconSize,
                                })}
                            </IconButton>
                            {/* TODO: Léa - Change icons dynamically */}
                        </Grid>
                        <Grid item container justifyContent="center" xs={4}>
                            <Typography
                                variant="body1"
                                color="primary"
                                fontWeight="bold"
                            >
                                {price} €
                            </Typography>
                        </Grid>
                        <Grid item xs={4} container justifyContent="flex-end">
                            <IconButton component={Link} to={'/annonce/' + id}>
                                <Info color="primary" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </MuiLink>
    )
}
