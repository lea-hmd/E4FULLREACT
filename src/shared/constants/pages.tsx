import { Page } from '../types/Page'
import {
    ManageAccounts,
    PersonSearch,
    Logout,
    Login,
    LocalOffer,
    PersonAdd,
} from '@mui/icons-material'

//TODO: Léa - Don't forget to check the links

export const pages: Page[] = [
    {
        id: 1,
        title: 'Accueil',
        link: '/',
    },
    {
        id: 2,
        title: 'Toutes les annonces',
        link: '/annonces',
    },
    {
        id: 3,
        title: 'Mon profil',
        link: '/mon-profil',
        privateRoute: true,
        userMenu: true,
        icon: <ManageAccounts color="primary" />,
    },
    {
        id: 4,
        title: 'Mon profil public',
        link: '/profil/:id',
        privateRoute: true,
        userMenu: true,
        icon: <PersonSearch color="primary" />,
    },
    {
        id: 5,
        title: 'Mes annonces',
        link: '/mes-annonces',
        privateRoute: true,
        userMenu: true,
        icon: <LocalOffer color="primary" />,
    },
    {
        id: 6,
        title: 'Se déconnecter',
        link: '/deconnexion',
        privateRoute: true,
        userMenu: true,
        logout: true,
        icon: <Logout color="primary" />,
    },
    {
        id: 7,
        title: 'Se connecter',
        link: '/connexion',
        userMenu: true,
        privateRoute: false,
        icon: <Login color="primary" />,
    },
    {
        id: 8,
        title: "S'inscrire",
        link: '/inscription',
        userMenu: true,
        privateRoute: false,
        icon: <PersonAdd color="primary" />,
    },
]
