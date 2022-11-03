import React from 'react'
import { Theme } from '@mui/material'

import OffersFilter from '../components/offers/OffersFilter'
import CustomContainer from '../components/common/custom/CustomContainer'
import FilteredOffers from '../components/offers/FilteredOffers'

import { RequestType } from '../shared/types/RequestType'
import request from '../api/Request'

type OffersProps = {
    theme: Theme
}
export default function Offers({ theme }: OffersProps) {
    const [searchValue, setSearchValue] = React.useState('')
    const [filteredOffers, setFilteredOffers] = React.useState([])

    const handleSearchValueChange = (event: React.BaseSyntheticEvent) => {
        setSearchValue(event.target.value)
    }

    const requestParams: RequestType = {
        endpoint: '/search?key=' + searchValue,
        method: 'GET',
    }

    async function getFilteredOffers() {
        try {
            await request(requestParams)
                .then((response) => response.json())
                .then((data) => setFilteredOffers(data))
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    React.useEffect(() => {
        getFilteredOffers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue])

    return (
        <CustomContainer>
            {/* TODO: Léa - Change style later */}
            <OffersFilter
                {...{ theme, searchValue, handleSearchValueChange }}
            />
            <FilteredOffers {...{ theme, filteredOffers }} />
        </CustomContainer>
    )
}
