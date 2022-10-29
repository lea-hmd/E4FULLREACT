import { Page } from '../types/Page'

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
    },
    {
        id: 4,
        title: 'Mon profil public',
        link: '/profil/:id',
        privateRoute: true,
        userMenu: true,
    },
    {
        id: 5,
        title: 'Mes annonces',
        link: '/mes-annonces',
        privateRoute: true,
        userMenu: true,
    },
    {
        id: 6,
        title: 'Se déconnecter',
        link: '/deconnexion',
        privateRoute: true,
        userMenu: true,
        logout: true,
    },
    {
        id: 7,
        title: 'Se connecter',
        link: '/connexion',
        userMenu: true,
        privateRoute: false,
    },
    {
        id: 8,
        title: "S'inscrire",
        link: '/inscription',
        userMenu: true,
        privateRoute: false,
    },
]
