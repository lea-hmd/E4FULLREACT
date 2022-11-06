import React from 'react'
import { Theme, Grid } from '@mui/material'

import { SectionTitle } from '../../common/titles/CustomTitles'
import CategoryCard from './CategoryCard'
import CustomContainer from '../../common/custom/CustomContainer'

import { RequestType } from '../../../shared/types/RequestType'
import request from '../../../api/Request'

type CategoriesFilterProps = {
    theme: Theme
    // eslint-disable-next-line no-unused-vars
    handleCategoryClicked: (machine_name: string) => void
}

export default function CategoriesFilter({
    theme,
    handleCategoryClicked,
}: CategoriesFilterProps) {
    const [categories, setCategories] = React.useState([])

    const requestParams: RequestType = {
        endpoint: '/offers-categories',
        method: 'GET',
    }

    async function getCategories() {
        try {
            await request(requestParams)
                .then((response) => response.json())
                .then((data) => setCategories(data))
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    React.useEffect(() => {
        getCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <CustomContainer>
            <SectionTitle title="Catégories d'annonces" />
            <Grid container spacing={2}>
                {categories.map(({ label, machine_name }, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        xl={3}
                        key={index}
                        onClick={() => handleCategoryClicked(machine_name)}
                    >
                        <CategoryCard {...{ theme, machine_name, label }} />
                    </Grid>
                ))}
            </Grid>
        </CustomContainer>
    )
}
