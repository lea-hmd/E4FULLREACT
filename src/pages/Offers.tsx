import React from 'react'
import { Grid, Theme } from '@mui/material'

import OffersFilter from '../components/offers/OffersFilter'
import { SectionTitle } from '../components/common/titles/CustomTitles'
import CustomContainer from '../components/common/custom/CustomContainer'
import AllOffers from '../components/offers/AllOffers'

type OffersProps = {
    theme: Theme
}
export default function Offers({ theme }: OffersProps) {
    return (
        <CustomContainer>
            <SectionTitle title="Toutes les annonces" />
            {/* TODO: Léa - Change style later */}
            <Grid container justifyContent="center" alignItems="center">
                <OffersFilter />
            </Grid>
            <AllOffers {...{ theme }} />
        </CustomContainer>
    )
}
