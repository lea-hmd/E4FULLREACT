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

type CheckedItem = {
    category: string
    checked: boolean
}
export default function Offers({ hpCategory }: OffersProps) {
    const [searchValue, setSearchValue] = React.useState('')
    const [filteredOffers, setFilteredOffers] = React.useState([])
    const [categoryHp, setCategoryHp] = React.useState(hpCategory)
    const [selectedCategories, setSelectedCategories] = React.useState<
        CheckedItem[]
    >([])
    const [getOffers, setGetOffers] = React.useState(true)

    const theme = useTheme()

    const handleSearchValueChange = (event: React.BaseSyntheticEvent) => {
        setSearchValue(event.target.value)
        setGetOffers(true)
    }

    const handleCategoryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        let checkedCategoriesList = [...selectedCategories]
        if (event.target.checked) {
            checkedCategoriesList = [
                ...selectedCategories,
                {
                    category: event.target.value,
                    checked: event.target.checked,
                },
            ]
        } else {
            checkedCategoriesList.splice(
                selectedCategories.indexOf(
                    selectedCategories.find(
                        (item) => item.category === event.target.value
                    ) as CheckedItem
                ),
                1
            )
        }
        setSelectedCategories(checkedCategoriesList)
        getFilteredOffers(checkedCategoriesList)
    }

    async function getFilteredOffers(checkboxState?: CheckedItem[]) {
        const categoriesQuery = (
            checkboxState ? checkboxState : selectedCategories
        ).map(({ category }) => '&category=' + category)

        const requestParams: RequestType = {
            endpoint:
                '/search?key=' +
                searchValue +
                '&category=' +
                categoryHp +
                categoriesQuery,
            method: 'GET',
        }
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
        if (getOffers) {
            getFilteredOffers()
            setGetOffers(false)
            setCategoryHp('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, getOffers])

    return (
        <CustomContainer>
            <OffersFilter
                {...{
                    theme,
                    searchValue,
                    handleSearchValueChange,
                    handleCategoryChange,
                }}
            />
            <FilteredOffers {...{ theme, filteredOffers }} />
        </CustomContainer>
    )
}
