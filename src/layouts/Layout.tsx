import { Container, Theme } from '@mui/material'
import React from 'react'
import Navbar from '../components/navbar/Navbar'

type LayoutProps = {
    theme: Theme
    loggedIn: boolean
    darkMode: boolean
    children: React.ReactNode
    // eslint-disable-next-line no-unused-vars
    handleChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Layout({
    theme,
    loggedIn,
    children,
    darkMode,
    handleChangeMode,
}: LayoutProps) {
    return (
        <>
            <Navbar
                {...{
                    theme,
                    loggedIn,
                    darkMode,
                    handleChangeMode,
                }}
            />
            <Container maxWidth="xl" sx={{ my: 5, mx: 3 }}>
                {children}
            </Container>
        </>
    )
}
