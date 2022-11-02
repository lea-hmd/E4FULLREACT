import React from 'react'
import { Grid, Theme } from '@mui/material'
import OfferCard from './OfferCard'
import { RequestType } from '../../shared/types/RequestType'
import request from '../../api/Request'

type AllOffersProps = {
    theme: Theme
}

export default function AllOffers({ theme }: AllOffersProps) {
    const [offers, setOffers] = React.useState([])

    const requestParams: RequestType = {
        endpoint: '/search?key=',
        method: 'GET',
    }

    async function getOffers() {
        try {
            await request(requestParams)
                .then((response) => response.json())
                .then((data) => setOffers(data))
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    React.useEffect(() => {
        getOffers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Grid container spacing={3}>
            {offers.map(
                (
                    {
                        title,
                        description,
                        price,
                        category,
                        product_picture,
                        created_at,
                    },
                    index
                ) => (
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
                            {...{
                                theme,
                                title,
                                description,
                                price,
                                category,
                                product_picture,
                                created_at,
                            }}
                        />
                    </Grid>
                )
            )}
        </Grid>
    )
}
