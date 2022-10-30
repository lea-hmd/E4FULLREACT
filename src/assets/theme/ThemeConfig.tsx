import { PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'

import { Colors } from '../styles/Colors'

export const ThemeConfig = (prefersDarkMode: boolean) => {
    const darkTheme = {
        primary: {
            main: Colors.lightWhite,
        },
        secondary: {
            main: Colors.lightBlue,
            dark: Colors.navyBlue,
        },
        background: {
            default: Colors.darkBlue,
        },
    }

    const lightTheme = {
        primary: {
            main: Colors.darkBlue,
        },
        secondary: {
            main: Colors.orange,
            dark: Colors.beige,
        },
        background: {
            default: Colors.lightWhite,
        },
    }

    // Récupère la bonne palette en fonction du mode passé en paramètre
    const getPalette = (mode: PaletteMode) => ({
        palette: {
            mode,
            ...(mode === 'light' ? lightTheme : darkTheme),
        },
    })

    // Crée le thème avec la palette récupérée
    const dynamicTheme = createTheme(
        getPalette(prefersDarkMode ? 'dark' : 'light')
    )

    return dynamicTheme
}
