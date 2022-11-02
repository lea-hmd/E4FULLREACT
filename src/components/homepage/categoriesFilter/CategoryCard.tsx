import React from 'react'
import {
    Theme,
    Card,
    CardContent,
    Grid,
    Typography,
    Link as MuiLink,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { categoryIcon, categoryName } from '../../common/utils/utils'

type CategoryCardProps = {
    theme: Theme
    category: string
}

export default function CategoryCard({ theme, category }: CategoryCardProps) {
    const iconSize = 'large'
    return (
        <MuiLink component={Link} to="/" underline="none">
            {/* TODO: Léa - Fix redirection */}
            <Card
                sx={{
                    backgroundColor: theme.palette.secondary.dark,
                    '&:hover': {
                        filter: 'brightness(80%)',
                        cursor: 'pointer',
                    },
                }}
            >
                <CardContent sx={{ my: 2 }}>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid
                            item
                            container
                            justifyContent="center"
                            alignItems="center"
                        >
                            {categoryIcon({ category, iconSize })}
                            {/* TODO: Léa - Make categories unique */}
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography
                                gutterBottom
                                variant="h6"
                                fontWeight="bold"
                                color="primary"
                            >
                                {categoryName(category)}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </MuiLink>
    )
}
