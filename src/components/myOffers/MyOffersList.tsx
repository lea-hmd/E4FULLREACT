/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { RequestType } from '../../shared/types/RequestType'
import RequestMethod from '../../api/RequestMethod'
import { Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import OfferCard from '../offer/OfferCard'
import ConfirmDeleteDialog from './ConfirmDeleteDialog'
import MyOfferForm from './MyOfferForm'

type MyOfferListProps = {
    handleClickOpen?: (offer: any) => void
    isEditing: boolean
    open: boolean
    handleClose: () => void
}

export default function MyOffersList({
    handleClickOpen,
    open,
    handleClose,
    isEditing,
}: MyOfferListProps) {
    const theme = useTheme()
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
    const [myOffers, setMyOffers] = useState<any>()
    const { state } = useAuth()
    const token = state.token

    const handleOpenDeleteDialog = () => {
        setOpenDeleteDialog(true)
    }
    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false)
    }

    async function getMyOffers() {
        const requestParams: RequestType = {
            endpoint: '/admin_offer/my',
            method: 'GET',
            token,
        }

        try {
            await RequestMethod(requestParams)
                .then((response) => response.json())
                .then((data) => {
                    setMyOffers(data)
                })
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    async function deleteOffer(id: number) {
        const requestParams: RequestType = {
            endpoint: '/admin_offer/' + id,
            method: 'DELETE',
            token,
        }

        try {
            await RequestMethod(requestParams)
                .then((response) => response.json())
                .then((data) => {
                    setMyOffers(data)
                })
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }
    const handleDeleteOffer = (id: number) => {
        deleteOffer(id)
        handleCloseDeleteDialog()
    }

    React.useEffect(() => {
        getMyOffers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Grid container spacing={3} justifyContent="center" mt={3}>
                {myOffers?.length ? (
                    <>
                        <Grid item xs={12} mb={3}>
                            <Typography
                                textAlign="center"
                                fontWeight="bold"
                                variant="h6"
                                gutterBottom
                            >
                                {myOffers?.length} r??sultats trouv??s
                            </Typography>
                        </Grid>
                        {myOffers?.map((offer: any, index: React.Key) => (
                            <Grid
                                item
                                container
                                justifyContent="center"
                                key={index}
                                sm={6}
                                md={4}
                                xl={3}
                            >
                                <OfferCard
                                    myOffer={true}
                                    {...{
                                        theme,
                                        handleOpenDeleteDialog,
                                        handleClickOpen,
                                        offer,
                                    }}
                                />
                                <MyOfferForm
                                    {...{
                                        editOffer: offer,
                                        open,
                                        handleClose,
                                        isEditing,
                                    }}
                                />
                                <ConfirmDeleteDialog
                                    id={offer.id}
                                    {...{
                                        theme,
                                        openDeleteDialog,
                                        handleDeleteOffer,
                                        handleCloseDeleteDialog,
                                    }}
                                />
                            </Grid>
                        ))}
                    </>
                ) : (
                    <Typography
                        textAlign="center"
                        fontWeight="bold"
                        variant="h6"
                        gutterBottom
                    >
                        Aucune annonce ne correspond ?? votre recherche ...
                    </Typography>
                )}
            </Grid>
        </>
    )
}
