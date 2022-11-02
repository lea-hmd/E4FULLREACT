import React from 'react'
import { Grid, Theme } from '@mui/material'

import OfferCard from '../components/offers/OfferCard'
import OffersFilter from '../components/offers/OffersFilter'
import { SectionTitle } from '../components/common/titles/CustomTitles'

import { fakeOffers } from '../db/fakeOffers'
import CustomContainer from '../components/common/custom/CustomContainer'

type OffersProps = {
    theme: Theme
}
export default function Offers({ theme }: OffersProps) {
    //TODO: Léa - Change this data with the api response
    const offers = fakeOffers

    return (
        <CustomContainer>
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
                        {
                            title,
                            description,
                            price,
                            machine_name,
                            productPicture,
                        },
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
                                    machine_name,
                                    productPicture,
                                }}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </CustomContainer>
    )
}
