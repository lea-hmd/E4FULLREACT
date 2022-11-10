import { CardActionArea, Chip, Link, Theme } from '@mui/material'
import React from 'react'

import noImage from '../../assets/images/noImage.jpg'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { categoryIcon, categoryName } from '../common/utils/utils'

type OfferPageProps = {
    theme: Theme
    offer: {
        title: string
        description: string
        price: number
        category: string
        product_picture: any
        Author: {
            firstname: string
            lastname: string
            profile_picture: any
        }
        Status: { label: string }
    } | null
}
// "Author":{"id":1,"firstname":"Soufian","lastname":"AIT TIRITE","profile_picture":null}
export default function OfferPageCard({ theme, offer }: OfferPageProps) {
    const iconSize = 'medium'
    if (!offer) return <></>
    return (
        <>
            <Card
                sx={{
                    backgroundColor: theme.palette.secondary.dark,
                    width: '35rem',
                    margin: 'auto',
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={
                            offer.product_picture == null
                                ? noImage
                                : offer.product_picture
                        }
                        alt="Image de l'annonce"
                    />
                    <CardContent>
                        <Chip
                            size="small"
                            icon={categoryIcon({
                                machine_name: offer.category,
                                iconSize,
                            })}
                            label={categoryName(offer.category)}
                            sx={{ px: 1, mb: 2 }}
                        />
                        <Typography
                            noWrap
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="primary"
                        >
                            {offer.title}
                        </Typography>
                        <Typography
                            noWrap
                            gutterBottom
                            variant="body2"
                            color="primary"
                        >
                            {offer.description ?? 'Pas de description'}
                        </Typography>
                        <Typography
                            mt={1.5}
                            variant="body1"
                            color="primary"
                            fontWeight="bold"
                        >
                            {offer.price} €
                        </Typography>
                        <Typography
                            mt={1.5}
                            variant="body1"
                            color="primary"
                            fontWeight="bold"
                        >
                            {offer.Status.label}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* MANQUE REDIRECT VERS LE PROFIL  */}
                    <Link href="/profil/:id" underline="hover">
                        {"Profile de l'annonceur"}
                    </Link>
                </CardActions>
            </Card>

            <Card
                sx={{
                    backgroundColor: theme.palette.secondary.dark,
                    width: '15rem',
                    margin: 'auto',
                    mt: '0.5rem',
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image=""
                        alt="profile picture"
                    />
                    <CardContent>
                        <Typography
                            noWrap
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="primary"
                        >
                            {offer.Author.firstname} {offer.Author.lastname}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}
