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
    Link as MuiLink,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { categoryIcon, categoryName } from '../common/utils/utils'

type OfferCardProps = {
    theme: Theme
    title: string
    description: string
    price: number
    machine_name: string
    productPicture: any
}

export default function OfferCard({
    theme,
    title,
    description,
    price,
    machine_name,
    productPicture,
}: OfferCardProps) {
    const iconSize = 'medium'

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
                }}
            >
                {/* TODO: Léa - Add Link component to card */}
                <CardMedia
                    component="img"
                    height="170"
                    image={productPicture}
                    alt="Image de l'offre"
                />
                <CardContent>
                    <Chip
                        size="small"
                        icon={categoryIcon({ machine_name, iconSize })} //TODO: Léa - Change icons dynamically
                        label={categoryName(machine_name)}
                        sx={{ px: 1, mb: 1 }}
                    />
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="primary"
                    >
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="primary">
                        {description}
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
                <CardActions sx={{ justifyContent: 'flex-end', mb: 1, mr: 1 }}>
                    <Button variant="contained" size="small" color="primary">
                        {/* TODO: Léa - Add Link component to button */}
                        Détails de l'offre
                    </Button>
                </CardActions>
            </Card>
        </MuiLink>
    )
}
