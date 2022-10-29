import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    CssBaseline,
    GlobalStyles,
    ThemeProvider,
    useMediaQuery,
} from '@mui/material'
import { ThemeConfig } from './assets/theme/ThemeConfig'
import Layout from './layouts/Layout'

function App() {
    const [loggedIn] = React.useState(true) //TODO : Finish this when connection functionality is done

    // Récupère l'apparence en fonction des choix de l'utilisateur sur sa machine
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [darkMode, setDarkMode] = React.useState(prefersDarkMode)
    const themeConfig = ThemeConfig(darkMode)
    const handleChangeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(event.target.checked)
    }
    // Le thème se rafraîchit automatiquement à chaque changement de la valeur de themeConfig
    const theme = React.useMemo(() => themeConfig, [themeConfig])

    // Met à jour le thème en fonction des choix de l'utilisateur sur sa machine
    useEffect(() => {
        setDarkMode(prefersDarkMode)
    }, [prefersDarkMode])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    body: {
                        backgroundColor: theme.palette.background.default,
                        transition: 'all 0.25s ease-in-out',
                    },
                }}
            />
            <Router>
                <Routes>
                    <Route path="/" />
                    <Route path="/" />
                    <Route path="/" />
                    <Route path="/" />
                    <Route path="/" />
                    <Route path="/" />
                    <Route path="/" />
                </Routes>
            </Router>
            <Layout
                {...{
                    theme,
                    loggedIn,
                    darkMode,
                    handleChangeMode,
                }}
            />
        </ThemeProvider>
    )
}

export default App
