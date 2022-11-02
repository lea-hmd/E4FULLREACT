import React from 'react'
import Typography from '@mui/material/Typography'

type CustomTitlesProps = {
    title: string
}

export function SectionTitle({ title }: CustomTitlesProps) {
    return (
        <Typography
            variant="h5"
            mb={3}
            mt={3}
            fontWeight={'bold'}
            color="primary"
        >
            {'/ ' + title}
        </Typography>
    )
}
