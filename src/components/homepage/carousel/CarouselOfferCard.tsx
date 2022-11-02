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

type CarouselOfferCardProps = {
    theme: Theme
    title: string
    price: number
    machine_name: string
    productPicture: any
}

export default function CarouselOfferCard({
    theme,
    title,
    price,
    productPicture,
    machine_name,
}: CarouselOfferCardProps) {
    const iconSize = 'small'
    return (
        <MuiLink component={Link} to="/" underline="none">
            {/* TODO: Léa - Fix redirection */}
            <Card
                sx={{
                    backgroundColor: theme.palette.secondary.dark,
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
                    image={productPicture}
                    alt="Image de l'offre"
                />
                <CardContent>
                    <Typography
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
                                    machine_name,
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
                            <IconButton>
                                <Info color="primary" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </MuiLink>
    )
}
