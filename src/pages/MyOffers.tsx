import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { RequestType } from '../shared/types/RequestType'
import request from '../api/Request'
import { Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import OfferCardMyOffers from '../components/offers/OfferCardMyOffers'

export default function MyOffers() {
    const theme = useTheme()
    const [myOffers, setMyOffers] = useState<any>()
    const { state } = useAuth()
    const token = state.token
    const requestParams: RequestType = {
        endpoint: '/admin_offer/my/',
        method: 'GET',
        customHeaders: { Authorization: `Bearer ${token}` },
    }

    async function getMyOffers() {
        try {
            await request(requestParams)
                .then((response) => response.json())
                .then((data) => {
                    // eslint-disable-next-line no-console
                    console.log(data)
                    setMyOffers(data)
                })
            //     .then((offers) => publicProfile?.offers)
            // console.log(offers)
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    React.useEffect(() => {
        getMyOffers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
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
                            {myOffers?.length} résultats trouvés
                        </Typography>
                    </Grid>
                    {myOffers?.map(
                        (
                            {
                                title,
                                description,
                                price,
                                category,
                                product_picture,
                                created_at,
                            }: any,
                            index: React.Key
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
                                <OfferCardMyOffers
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
                </>
            ) : (
                <Typography
                    textAlign="center"
                    fontWeight="bold"
                    variant="h6"
                    gutterBottom
                >
                    Aucune annonce ne correspond à votre recherche ...
                </Typography>
            )}
        </Grid>
    )
}
