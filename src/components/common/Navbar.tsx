import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
// import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { AccountCircle } from '@mui/icons-material'
import SwitchThemeButton from '../../assets/theme/SwitchThemeButton'
import Logo from '../../assets/images/logo.png'
import { Theme } from '@mui/material'
// const pages = [
//     {
//         id: 1,
//         title: 'Accueil',
//         link: '/',
//     },
//     {
//         id: 2,
//         title: 'Toutes les annonces',
//         link: '/', //TODO : Change this link to the right one
//     },
// ]
const settings = [
    {
        id: 1,
        title: 'Mon profil',
        link: '/', //TODO : Change this link to the right one
        privateRoute: true,
    },
    {
        id: 2,
        title: 'Mon profil public',
        link: '/', //TODO : Change this link to the right one,
        privateRoute: true,
    },
    {
        id: 3,
        title: 'Mes annonces',
        link: '/', //TODO : Change this link to the right one
        privateRoute: true,
    },
    {
        id: 4,
        title: 'Se déconnecter',
        link: '/', //TODO : Change this link to the right one
        privateRoute: true,
    },
    {
        id: 5,
        title: 'Se connecter',
        link: '/',
        privateRoute: false,
    },
    {
        id: 6,
        title: "S'inscrire",
        link: '/',
        privateRoute: false,
    },
]

type NavbarProps = {
    theme: Theme
    darkMode: boolean
    loggedIn: boolean
    // eslint-disable-next-line no-unused-vars
    handleChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Navbar({
    theme,
    loggedIn,
    darkMode,
    handleChangeMode,
}: NavbarProps) {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: theme.palette.secondary.dark }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            my: 1,
                            mx: 5,
                        }}
                    >
                        <img src={Logo} width={50} />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {/* {pages.map((page) => (
                            <Button
                                component={Link}
                                key={page.id}
                                to={page.link}
                                sx={{
                                    my: 2,
                                    color: theme.palette.primary.main,
                                    fontWeight: 'bold',
                                    display: 'block',
                                }}
                            >
                                {page.title}
                            </Button>
                        ))} */}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                size="large"
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                {loggedIn ? (
                                    <Avatar alt="My Profil picture" src="" />
                                ) : (
                                    <AccountCircle
                                        sx={{
                                            color: theme.palette.secondary.dark,
                                            bg: 'transparent',
                                        }}
                                    />
                                )}

                                {/*TODO : Change the source to the right one*/}
                            </IconButton>
                        </Tooltip>

                        <SwitchThemeButton
                            checked={darkMode}
                            onChange={handleChangeMode}
                        />
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings
                                .filter(
                                    (setting) =>
                                        setting.privateRoute == loggedIn
                                )
                                .map((setting) => (
                                    <MenuItem
                                        key={setting.id}
                                        //TODO : Add onClick props with logout function only if setting title = Se déconnecter
                                    >
                                        <Typography textAlign="center">
                                            {setting.title}
                                        </Typography>
                                    </MenuItem>
                                ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
