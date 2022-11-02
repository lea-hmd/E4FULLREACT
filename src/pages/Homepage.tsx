import React from 'react'
import OffersCarousel from '../components/homepage/carousel/OffersCarousel'
import { Theme } from '@mui/material'
import CategoriesFilter from '../components/homepage/categoriesFilter/CategoriesFilter'
import Banderole from '../components/homepage/banderole/Banderole'
import { RequestType } from '../shared/types/RequestType'
import request from '../api/Request'

type HomepageProps = {
    theme: Theme
}

export default function Homepage({ theme }: HomepageProps) {
    const [offers, setOffers] = React.useState([])

    const requestParams: RequestType = {
        endpoint: '/search?key=',
        method: 'GET',
    }

    async function getOffers() {
        try {
            await request(requestParams)
                .then((response) => response.json())
                .then((data) => setOffers(data))
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    React.useEffect(() => {
        getOffers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Banderole {...{ offers }} />
            <CategoriesFilter {...{ theme }} />
            <OffersCarousel {...{ theme, offers }} />
        </>
    )
}
