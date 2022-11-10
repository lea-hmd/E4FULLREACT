import { useTheme } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import request from '../api/Request'
import OfferDetailsCard from '../components/offer/OfferDetailsCard'
import { RequestType } from '../shared/types/RequestType'

export default function Offer() {
    const theme = useTheme()
    const { id } = useParams()
    const [offer, setOffer] = React.useState(null)
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
    return <OfferDetailsCard {...{ theme, offer }} />
}
