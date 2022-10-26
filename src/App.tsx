import React, { useEffect } from 'react'
import {
    CssBaseline,
    GlobalStyles,
    ThemeProvider,
    useMediaQuery,
} from '@mui/material'
import { ThemeConfig } from './assets/theme/ThemeConfig'
import SwitchThemeButton from './assets/theme/SwitchThemeButton'

import './App.css'

function App() {
    // Récupère l'apparence en fonction des choix de l'utilisateur sur sa machine
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [darkMode, setDarkMode] = React.useState(prefersDarkMode)
    const themeConfig = ThemeConfig(darkMode)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                    body: { backgroundColor: theme.palette.background.default },
                }}
            />
            <SwitchThemeButton checked={darkMode} onChange={handleChange} />
        </ThemeProvider>
    )
}

export default App
