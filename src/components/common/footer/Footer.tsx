import React from 'react'
import { Container, Divider, Theme, Typography } from '@mui/material'

type FooterProps = {
    theme: Theme
}

export default function Footer({ theme }: FooterProps) {
    const now = new Date()
    const actualYear = now.getFullYear()

    return (
        <footer
            style={{
                marginBottom: 5,
            }}
        >
            <Container maxWidth="xl">
                <Divider
                    sx={{
                        background: theme.palette.primary.main,
                        width: '100%',
                        mx: 'auto',
                        mb: 3,
                    }}
                    variant="middle"
                />
                <Typography
                    align="center"
                    fontSize="13px"
                    fontWeight="bold"
                    color="primary"
                >
                    &copy; Toraifōsu - {actualYear} - Tous droits réservés
                </Typography>
            </Container>
        </footer>
    )
}
