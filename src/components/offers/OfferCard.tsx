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
} from '@mui/material'
import CheckroomIcon from '@mui/icons-material/Checkroom'

type OfferCardProps = {
    theme: Theme
    title: string
    description: string
    price: number
    category: string
    productPicture: any
}

export default function OfferCard({
    theme,
    title,
    description,
    price,
    category,
    productPicture,
}: OfferCardProps) {
    return (
        <Card
            sx={{
                maxWidth: 300,
                backgroundColor: theme.palette.secondary.dark,
            }}
        >
            <CardMedia
                component="img"
                height="170"
                image={productPicture}
                alt="Image de l'offre"
            />
            <CardContent>
                <Chip
                    size="small"
                    icon={<CheckroomIcon />}
                    label={category}
                    sx={{ px: 1, mb: 1 }}
                />
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary.main"
                >
                    {title}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography mt={1.5} variant="body1" color="text.primary">
                    {price} €
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', mb: 1, mr: 1 }}>
                <Button variant="contained" size="small">
                    Détails de l'offre
                </Button>
            </CardActions>
        </Card>
    )
}
