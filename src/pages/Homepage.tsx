import React from 'react'
import OffersCarousel from '../components/homepage/carousel/OffersCarousel'
import { Theme } from '@mui/material'
import CategoriesFilter from '../components/homepage/categoriesFilter/CategoriesFilter'
import Banderole from '../components/homepage/banderole/Banderole'

type HomepageProps = {
    theme: Theme
}

export default function Homepage({ theme }: HomepageProps) {
    return (
        <>
            <Banderole />
            <CategoriesFilter {...{ theme }} />
            <OffersCarousel {...{ theme }} />
        </>
    )
}
