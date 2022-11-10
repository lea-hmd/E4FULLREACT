import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material'
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
    Tooltip,
    useMediaQuery,
} from '@mui/material'
import { styled, Theme } from '@mui/material/styles'

import SwitchThemeButton from '../../../assets/theme/SwitchThemeButton'
import Menus from './Menus'

import { pages as pagesConstants } from '../../../shared/constants/pages'
import blueShadowLogo from '../../../assets/images/blueShadowLogo.png'
import whiteShadowLogo from '../../../assets/images/whiteShadowLogo.png'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))

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
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    )
    const [openLogoutDialog, setOpenLogoutDialog] = React.useState(false)
    const navigate = useNavigate()
    const mobileFormat = useMediaQuery(theme.breakpoints.down('sm'))
    const pages = pagesConstants

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }
    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorEl(null)
    }
    const handleOpenLogoutDialog = () => {
        setOpenLogoutDialog(true)
    }
    const handleCloseLogoutDialog = () => {
        setOpenLogoutDialog(false)
        navigate('/')
    }

    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: theme.palette.secondary.dark }}
        >
            <Container maxWidth="xl">
                <Toolbar>
                    <Box
                        sx={{
                            my: 1,
                        }}
                    >
                        <Link to="/">
                            <img
                                src={
                                    darkMode ? whiteShadowLogo : blueShadowLogo
                                }
                                width={50}
                            />
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        {mobileFormat ? (
                            <Tooltip title="Cliquer pour ouvrir le menu">
                                <IconButton
                                    size="large"
                                    onClick={handleOpenMenu}
                                    sx={{ p: 0 }}
                                >
                                    <MenuIcon
                                        sx={{
                                            fontSize: '45px',
                                            justifyContent: 'center',
                                            color: theme.palette.primary.main,
                                        }}
                                    />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            pages
                                .filter((page) => page.userMenu === undefined)
                                .map((page) => (
                                    <Button
                                        component={Link}
                                        key={page.id}
                                        to={page.link ?? '/'}
                                        sx={{
                                            my: 2,
                                            color: theme.palette.primary.main,
                                            fontWeight: 'bold',
                                            display: 'block',
                                        }}
                                    >
                                        {page.title}
                                    </Button>
                                ))
                        )}
                    </Box>
                    <Box sx={{ mr: 3 }}>
                        <SwitchThemeButton
                            checked={darkMode}
                            onChange={handleChangeMode}
                        />
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Cliquer pour ouvrir le menu utilisateur">
                            <IconButton
                                size="large"
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                {loggedIn ? (
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        variant="dot"
                                    >
                                        <Avatar
                                            src="" //TODO: Léa - Change the avatar src
                                            alt="Ma photo de profil"
                                        />
                                    </StyledBadge>
                                ) : (
                                    <AccountCircle
                                        sx={{
                                            fontSize: '45px',
                                            color: theme.palette.secondary.main,
                                            bg: 'transparent',
                                        }}
                                    />
                                )}
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menus
                        {...{
                            pages,
                            theme,
                            anchorEl,
                            loggedIn,
                            anchorElUser,
                            mobileFormat,
                            handleCloseMenu,
                            openLogoutDialog,
                            handleCloseUserMenu,
                            handleOpenLogoutDialog,
                            handleCloseLogoutDialog,
                        }}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
