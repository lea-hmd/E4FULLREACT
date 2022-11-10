/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import CustomContainer from '../components/common/custom/CustomContainer'
import { SectionTitle } from '../components/common/custom/CustomTitles'
import MyOfferForm from '../components/myOffers/MyOfferForm'
import MyOffersList from '../components/myOffers/MyOffersList'
import { Button } from '@mui/material'

export default function MyOffers() {
    const [open, setOpen] = React.useState(false)
    const [isEditing, setIsEditing] = React.useState(false)
    const [offer, setOffer] = React.useState<any>()
    const [editOffer, setEditOffer] = React.useState<any>()

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleEdit = () => {
        setOpen(true)
        setIsEditing(true)
        setEditOffer(offer)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <CustomContainer>
            <SectionTitle title="Mes annonces" />
            <Button variant="contained" onClick={handleClickOpen}>
                Créer une annonce
            </Button>
            <MyOfferForm
                {...{
                    open,
                    handleClose,
                    isEditing,
                    editOffer,
                }}
            />
            <MyOffersList
                // handleClickOpen={handleEdit?.(editOffer)}
                {...{
                    open,
                    handleClose,
                    isEditing,
                }}
            />
        </CustomContainer>
    )
}
