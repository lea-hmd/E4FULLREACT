import React from 'react'
import { Grid, Theme, Container, useMediaQuery } from '@mui/material'

import OfferCard from '../components/offers/OfferCard'
import OffersFilter from '../components/offers/OffersFilter'
import { SectionTitle } from '../components/common/titles/CustomTitles'

import { fakeOffers } from '../db/fakeOffers'

type OffersProps = {
    theme: Theme
}
export default function Offers({ theme }: OffersProps) {
    //TODO: Léa - Change this data with the api response
    const offers = fakeOffers
    const xlScreen = useMediaQuery('(min-width:1440px)')

    return (
        <Container maxWidth={xlScreen ? 'lg' : 'md'} sx={{ mb: 7 }}>
            <SectionTitle title="Toutes les annonces" />
            {/* TODO: Léa - Change style later */}
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
                            xl={3}
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
