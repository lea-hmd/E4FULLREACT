import React from 'react'
import CustomContainer from '../components/common/custom/CustomContainer'
import { SectionTitle } from '../components/common/custom/CustomTitles'
import MyOffersFilter from '../components/myOffers/MyOffersFilter'
import MyOffersList from '../components/myOffers/MyOffersList'

export default function MyOffers() {
    return (
        <CustomContainer>
            <SectionTitle title="Mes annonces" />
            <MyOffersFilter />
            <MyOffersList />
        </CustomContainer>
    )
}
