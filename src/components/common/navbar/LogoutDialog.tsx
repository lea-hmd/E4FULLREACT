import React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    Theme,
} from '@mui/material'
import { useAuth } from '../../../context/AuthContext'

type LogoutDialogProps = {
    theme: Theme
    openLogoutDialog: boolean
    handleCloseLogoutDialog: () => void
}

export default function LogoutDialog({
    theme,
    openLogoutDialog,
    handleCloseLogoutDialog,
}: LogoutDialogProps) {
    const { dispatch } = useAuth()

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        handleCloseLogoutDialog()
    }

    return (
        <>
            <Dialog
                open={openLogoutDialog}
                onClose={handleCloseLogoutDialog}
                sx={{
                    '& .MuiDialog-paper': {
                        background: theme.palette.background.default,
                        color: theme.palette.primary.main,
                    },
                }}
            >
                <DialogTitle sx={{ fontWeight: 'bold' }}>
                    Voulez-vous vraiment vous déconnecter ?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleCloseLogoutDialog}>Retour</Button>
                    <Button
                        onClick={handleLogout}
                        autoFocus
                        variant="contained"
                        size="small"
                    >
                        Confirmer
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
