import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
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
import ResetPassword from './pages/ResetPassword'
import MyOffer from './pages/MyOffer'
import Offer from './pages/Offer'
import Login from './pages/Login'
import Signin from './pages/Signin'
import PageNotFound from './pages/PageNotFound'

export default function App() {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const [loggedIn, setLoggedIn] = React.useState<boolean>(false) //TODO: Léa - Finish this when connection functionality is done

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

    const navigate = useNavigate()
    const [hpCategory, setHpCategory] = React.useState('')

    const handleCategoryClicked = (machine_name: string) => {
        setHpCategory(machine_name)
        navigate('/annonces')
    }

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
                        <Route
                            index
                            element={
                                <Homepage
                                    {...{ theme, handleCategoryClicked }}
                                />
                            }
                        />
                        <Route
                            path="/annonces"
                            element={<Offers {...{ theme, hpCategory }} />}
                        />
                        <Route path="/mon-profil" element={<MyProfile />} />
                        <Route path="/profil/:id" element={<PublicProfile />} />
                        <Route path="/mes-annonces" element={<MyOffers />} />
                        <Route path="/mon-annonce/:id" element={<MyOffer />} />
                        <Route path="/annonce/:id" element={<Offer />} />
                        <Route
                            path="/reinitialiser-mot-de-passe"
                            element={<ResetPassword {...{ theme }} />}
                        />
                        <Route
                            path="/connexion"
                            element={<Login {...{ theme, setLoggedIn }} />}
                        />
                        <Route path="/inscription" element={<Signin />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </Layout>
        </ThemeProvider>
    )
}
