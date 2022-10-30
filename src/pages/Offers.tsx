import React from 'react'
import OfferCard from '../components/offers/OfferCard'
import { Grid, Theme, Container, Typography } from '@mui/material'
import { fakeOffers } from '../db/fakeOffers'
import OffersFilter from '../components/offers/OffersFilter'

type OffersProps = {
    theme: Theme
}
export default function Offers({ theme }: OffersProps) {
    //TODO: Léa - Change this data with the api response
    const offers = fakeOffers

    return (
        <Container>
            <Typography variant="h3">/ Toutes les annonces</Typography>
            <Grid container justifyContent="center" alignItems="center">
                <OffersFilter />
            </Grid>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={3}
            >
                {offers.map(
                    (
                        { title, description, price, category, productPicture },
                        index
                    ) => (
                        <Grid
                            item
                            container
                            justifyContent="center"
                            key={index}
                            sm={6}
                            md={4}
                            lg={3}
                        >
                            <OfferCard
                                {...{
                                    theme,
                                    title,
                                    description,
                                    price,
                                    category,
                                    productPicture,
                                }}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </Container>
    )
}
