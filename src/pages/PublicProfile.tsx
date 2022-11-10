import { Divider, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import request from '../api/Request'
import OffersCarousel from '../components/homepage/carousel/OffersCarousel'
import { PublicProfileType } from '../shared/types/PublicProfileType'
import { RequestType } from '../shared/types/RequestType'
import { useTheme } from '@mui/material/styles'

export default function PublicProfile() {
    const { id } = useParams()
    const theme = useTheme()
    const [publicProfile, setPublicProfile] = useState<PublicProfileType>()
    const requestParams: RequestType = {
        endpoint: '/profile/' + id,
        method: 'GET',
    }
    async function getPublicProfile() {
        try {
            await request(requestParams)
                .then((response) => response.json())
                .then((data) => {
                    setPublicProfile(data)
                })
            //     .then((offers) => publicProfile?.offers)
            // console.log(offers)
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }
    React.useEffect(() => {
        getPublicProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    return (
        <Grid>
            {publicProfile && (
                <Typography variant="h2">
                    {publicProfile.firstname + ' '}
                    {publicProfile.lastname}
                </Typography>
            )}
            <Divider sx={{ width: '60%', m: '3rem 0' }} />
            <Typography variant="h5">Me contacter :</Typography>
            <Grid flexDirection="column">
                <TextField
                    variant="outlined"
                    label="Objet"
                    sx={{ mt: '3rem', width: '10rem', display: 'flex' }}
                />
                <TextField
                    variant="outlined"
                    label="Message"
                    sx={{ mt: '1rem', width: '20rem', display: 'flex' }}
                />
            </Grid>
            <Divider sx={{ width: '60%', m: '3rem 0' }} />
            {publicProfile?.Offers ? (
                <OffersCarousel {...{ theme, offers: publicProfile?.Offers }} />
            ) : (
                <Typography variant="h5">Aucune offre publiée</Typography>
            )}
        </Grid>
    )
}
