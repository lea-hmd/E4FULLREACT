import React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    Theme,
} from '@mui/material'
type LogoutDialogProps = {
    theme: Theme
    openDeleteDialog: boolean
    handleCloseDeleteDialog: () => void
    // eslint-disable-next-line no-unused-vars
    handleDeleteOffer: (id: number) => void
    id: number
}

export default function ConfirmDeleteDialog({
    id,
    theme,
    openDeleteDialog,
    handleCloseDeleteDialog,
    handleDeleteOffer,
}: LogoutDialogProps) {
    return (
        <>
            <Dialog
                open={openDeleteDialog}
                onClose={handleCloseDeleteDialog}
                sx={{
                    '& .MuiDialog-paper': {
                        background: theme.palette.background.default,
                        color: theme.palette.primary.main,
                    },
                }}
            >
                <DialogTitle sx={{ fontWeight: 'bold' }}>
                    Voulez-vous vraiment supprimer l'annonce ?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleCloseDeleteDialog}>Retour</Button>
                    <Button
                        onClick={() => handleDeleteOffer(id)}
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
