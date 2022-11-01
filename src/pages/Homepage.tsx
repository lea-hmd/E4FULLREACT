import React from 'react'
import OffersCarousel from '../components/homepage/carousel/OffersCarousel'
import { Theme } from '@mui/material'
import CategoriesFilter from '../components/homepage/categoriesFilter/CategoriesFilter'

type HomepageProps = {
    theme: Theme
}

export default function Homepage({ theme }: HomepageProps) {
    return (
        <>
            <CategoriesFilter {...{ theme }} />
            <OffersCarousel {...{ theme }} />
        </>
    )
}
