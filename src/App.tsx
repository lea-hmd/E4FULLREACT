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
import Homepage from './pages/Homepage'
import Offers from './pages/Offers'
import MyProfile from './pages/MyProfile'
import PublicProfile from './pages/PublicProfile'
import MyOffers from './pages/MyOffers'
import MyOffer from './pages/MyOffer'
import Offer from './pages/Offer'
import Logout from './pages/Logout'
import Login from './pages/Login'
import Signin from './pages/Signin'

export default function App() {
    const [loggedIn, setLoggedIn] = React.useState(true) //TODO: Léa - Finish this when connection functionality is done

    // Récupère l'apparence en fonction des choix de l'utilisateur sur sa machine
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [darkMode, setDarkMode] = React.useState(prefersDarkMode)
    const themeConfig = ThemeConfig(darkMode)

    const handleChangeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(event.target.checked)
        setLoggedIn(!loggedIn) //TODO: Léa - Remove this when connection functionality is done
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
                <Layout
                    {...{
                        theme,
                        loggedIn,
                        darkMode,
                        handleChangeMode,
                    }}
                >
                    <Routes>
                        {/* TODO: Léa - Change links and components props with the right params */}
                        <Route path="/">
                            <Route index element={<Homepage />} />
                            <Route path="/annonces" element={<Offers />} />
                            <Route path="/mon-profil" element={<MyProfile />} />
                            <Route
                                path="/profil/:id"
                                element={<PublicProfile />}
                            />
                            <Route
                                path="/mes-annonces"
                                element={<MyOffers />}
                            />
                            <Route
                                path="/mon-annonce/:id"
                                element={<MyOffer />}
                            />
                            <Route path="/annonce/:id" element={<Offer />} />
                            <Route path="/deconnexion" element={<Logout />} />
                            <Route path="/connexion" element={<Login />} />
                            <Route path="/inscription" element={<Signin />} />
                        </Route>
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    )
}
