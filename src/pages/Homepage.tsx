import React from 'react'
import OffersCarousel from '../components/homepage/carousel/OffersCarousel'
import { Theme } from '@mui/material'

type HomepageProps = {
    theme: Theme
}

export default function Homepage({ theme }: HomepageProps) {
    return <OffersCarousel {...{ theme }} />
}
