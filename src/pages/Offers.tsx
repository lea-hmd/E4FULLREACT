import React from 'react'
import { useTheme } from '@mui/material/styles'

import OffersFilter from '../components/offers/OffersFilter'
import CustomContainer from '../components/common/custom/CustomContainer'
import FilteredOffers from '../components/offers/FilteredOffers'

import { RequestType } from '../shared/types/RequestType'
import request from '../api/Request'

type OffersProps = {
    hpCategory: string
}
export default function Offers({ hpCategory }: OffersProps) {
    const [searchValue, setSearchValue] = React.useState('')
    const [filteredOffers, setFilteredOffers] = React.useState([])
    const [categoryHp, setCategoryHp] = React.useState(hpCategory)
    const theme = useTheme()

    const handleSearchValueChange = (event: React.BaseSyntheticEvent) => {
        setSearchValue(event.target.value)
    }

    const requestParams: RequestType = {
        endpoint: '/search?key=' + searchValue + '&category=' + categoryHp,
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
        setCategoryHp('')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue])

    return (
        <CustomContainer>
            {/* TODO: Léa - Change style later */}
            {/* TODO: Léa - Check the right category checkboxe when homepage category redirection */}
            <OffersFilter
                {...{ theme, searchValue, handleSearchValueChange }}
            />
            <FilteredOffers {...{ theme, filteredOffers }} />
        </CustomContainer>
    )
}
