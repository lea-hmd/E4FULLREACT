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
import { categoryIcon } from '../../common/utils/utils'

type CategoryCardProps = {
    theme: Theme
    machine_name: string
    label: string
}

export default function CategoryCard({
    theme,
    machine_name,
    label,
}: CategoryCardProps) {
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
                            {categoryIcon({ machine_name, iconSize })}
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
                                {label}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </MuiLink>
    )
}
