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
type CategoryCardProps = {
    theme: Theme
    category: string
    categoryIcon: React.ReactNode
}

export default function CategoryCard({
    theme,
    category,
    categoryIcon,
}: CategoryCardProps) {
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
                            {categoryIcon}
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
                                {category}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </MuiLink>
    )
}
