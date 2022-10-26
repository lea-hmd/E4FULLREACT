import React from 'react'
import {
    CssBaseline,
    GlobalStyles,
    ThemeProvider,
    useMediaQuery,
} from '@mui/material'
import { ThemeConfig } from './assets/theme/ThemeConfig'

import './App.css'

function App() {
    // Récupère l'apparence en fonction des choix de l'utilisateur sur sa machine
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const themeConfig = ThemeConfig(prefersDarkMode)

    // Le thème se rafraîchit automatiquement à chaque changement de la valeur de themeConfig
    const theme = React.useMemo(() => themeConfig, [themeConfig])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    body: { backgroundColor: theme.palette.background.default },
                }}
            />
        </ThemeProvider>
    )
}

export default App
