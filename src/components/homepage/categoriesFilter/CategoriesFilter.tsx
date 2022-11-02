import React from 'react'
import { Theme, Container, useMediaQuery, Grid } from '@mui/material'
import { SectionTitle } from '../../common/titles/CustomTitles'
import CategoryCard from './CategoryCard'
import { fakeOffers } from '../../../db/fakeOffers'

type CategoriesFilterProps = {
    theme: Theme
}

export default function CategoriesFilter({ theme }: CategoriesFilterProps) {
    const xlScreen = useMediaQuery('(min-width:1440px)')
    const offersCategories = fakeOffers

    return (
        <Container maxWidth={xlScreen ? 'lg' : 'md'} sx={{ mb: 7 }}>
            {/* TODO: Léa - Refactorisation du composant container */}

            <SectionTitle title="Catégories d'annonces" />
            <Grid container spacing={2}>
                {offersCategories.map(({ category }, index) => (
                    <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                        <CategoryCard {...{ theme, category }} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
