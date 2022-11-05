import React from 'react'
import { Container, useMediaQuery } from '@mui/material'

type CustomContainerProps = {
    children: React.ReactNode
}

export default function CustomContainer({ children }: CustomContainerProps) {
    const xlScreen = useMediaQuery('(min-width:1440px)')

    return (
        <Container maxWidth={xlScreen ? 'lg' : 'md'} sx={{ mb: 7 }}>
            {children}
        </Container>
    )
}
