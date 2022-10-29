import { Container, Theme } from '@mui/material'
import React from 'react'
import Navbar from '../components/navbar/Navbar'

type LayoutProps = {
    children: React.ReactNode
    darkMode: boolean
    // eslint-disable-next-line no-unused-vars
    handleChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void
    theme: Theme
    loggedIn: boolean
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
            <Container maxWidth="xl" sx={{ my: 5 }}>
                {children}
            </Container>
        </>
    )
}
