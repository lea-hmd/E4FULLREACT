import React from 'react'
import { useTheme } from '@mui/material/styles'
import CategoriesFilter from '../components/homepage/categoriesFilter/CategoriesFilter'
import OffersCarousel from '../components/homepage/carousel/OffersCarousel'
import Banderole from '../components/homepage/banderole/Banderole'

import { RequestType } from '../shared/types/RequestType'
import RequestMethod from '../api/RequestMethod'

type HomepageProps = {
    // eslint-disable-next-line no-unused-vars
    handleCategoryClicked: (machine_name: string) => void
}

export default function Homepage({ handleCategoryClicked }: HomepageProps) {
    const [offers, setOffers] = React.useState([])
    const theme = useTheme()
    const requestParams: RequestType = {
        endpoint: '/search?key=',
        method: 'GET',
    }

    async function getOffers() {
        try {
            await RequestMethod(requestParams)
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
            {/* TODO: Léa - Redirection on carousel offer click */}
            <Banderole {...{ offers }} />
            <CategoriesFilter {...{ theme, handleCategoryClicked }} />
            <OffersCarousel {...{ theme, offers }} />
        </>
    )
}
