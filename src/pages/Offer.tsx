import { Theme } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import request from '../api/Request'
import OfferPageCard from '../components/offer/OfferPageCard'
import { RequestType } from '../shared/types/RequestType'

type OfferProps = {
    theme: Theme
}

type OfferType = {
    title: string
    description: string
    price: number
    category: string
    product_picture: any
    Author: {
        firstname: string
        lastname: string
        profile_picture: any
    }
    Status: { label: string }
}

export default function Offer({ theme }: OfferProps) {
    const { id } = useParams()
    const [offer, setOffer] = React.useState<OfferType | null>(null)
    const requestParams: RequestType = {
        endpoint: '/offer/' + id,
        method: 'GET',
    }
    async function getOfferById() {
        try {
            await request(requestParams)
                .then((response) => response.json())
                .then((data) => setOffer(data))
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }
    React.useEffect(() => {
        getOfferById()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    return <OfferPageCard {...{ theme, offer }} />
}
