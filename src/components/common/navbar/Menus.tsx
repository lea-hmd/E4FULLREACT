import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Theme,
    Typography,
} from '@mui/material'

import { Page } from '../../../shared/types/Page'
import LogoutDialog from './LogoutDialog'

type MenuProps = {
    theme: Theme
    pages: Page[]
    loggedIn: boolean
    mobileFormat: boolean
    handleCloseMenu: () => void
    anchorEl: HTMLElement | null
    handleCloseUserMenu: () => void
    anchorElUser: HTMLElement | null
    handleOpenLogoutDialog: () => void
    openLogoutDialog: boolean
    handleCloseLogoutDialog: () => void
}

export default function Menus({
    pages,
    theme,
    anchorEl,
    loggedIn,
    anchorElUser,
    mobileFormat,
    handleCloseMenu,
    handleCloseUserMenu,
    openLogoutDialog,
    handleOpenLogoutDialog,
    handleCloseLogoutDialog,
}: MenuProps) {
    const location = useLocation()
    return (
        <>
            {mobileFormat && (
                <Menu
                    sx={{
                        mt: 7,
                    }}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    PaperProps={{
                        sx: {
                            backgroundColor: theme.palette.secondary.dark,
                        },
                    }}
                >
                    {pages
                        .filter((page) => page.userMenu === undefined)
                        .map((page) => (
                            <MenuItem
                                key={page.id}
                                component={Link}
                                to={page.link ?? '/'}
                            >
                                <ListItemIcon>{page.icon}</ListItemIcon>
                                <ListItemText>
                                    <Typography
                                        fontWeight="bold"
                                        color="primary"
                                    >
                                        {page.title}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                        ))}
                </Menu>
            )}
            <Menu
                sx={{
                    mt: 7,
                }}
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
                PaperProps={{
                    sx: {
                        backgroundColor: theme.palette.secondary.dark,
                    },
                }}
            >
                {pages
                    .filter(
                        (page) =>
                            page.privateRoute === loggedIn &&
                            page.userMenu === true
                    )
                    .map((page) => (
                        <MenuItem
                            key={page.id}
                            component={Link}
                            to={
                                page.logout
                                    ? location.pathname
                                    : page.link ?? '/'
                            }
                            onClick={
                                page.logout ? handleOpenLogoutDialog : undefined
                            }
                        >
                            <ListItemIcon>{page.icon}</ListItemIcon>
                            <ListItemText>
                                <Typography fontWeight="bold" color="primary">
                                    {page.title}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    ))}
            </Menu>
            <LogoutDialog
                {...{
                    theme,
                    openLogoutDialog,
                    handleCloseLogoutDialog,
                }}
            />
        </>
    )
}
