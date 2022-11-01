import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Theme,
    IconButton,
    Grid,
} from '@mui/material'
import { Checkroom, Info } from '@mui/icons-material'

type CarouselOfferCardProps = {
    theme: Theme
    title: string
    price: number
    category: string
    productPicture: any
}

export default function CarouselOfferCard({
    theme,
    title,
    price,
    productPicture,
}: CarouselOfferCardProps) {
    return (
        <Card
            sx={{
                maxWidth: 250,
                backgroundColor: theme.palette.secondary.dark,
                '&:hover': {
                    filter: 'brightness(80%)',
                },
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
                    color="primary.main"
                >
                    {title}
                </Typography>

                <Grid container alignItems="center" m={0.5}>
                    <Grid item container justifyContent="flex-start" xs={4}>
                        <IconButton>
                            <Checkroom color="primary" />
                        </IconButton>
                        {/* TODO: Léa - Change icons dynamically */}
                    </Grid>
                    <Grid item container justifyContent="center" xs={4}>
                        <Typography
                            variant="body1"
                            color="text.primary"
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
    )
}
