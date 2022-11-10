import {
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import RequestMethod from '../api/RequestMethod'
import OffersCarousel from '../components/homepage/carousel/OffersCarousel'
import { PublicProfileType } from '../shared/types/PublicProfileType'
import { RequestType } from '../shared/types/RequestType'
import { useTheme } from '@mui/material/styles'
import CustomContainer from '../components/common/custom/CustomContainer'
import SendIcon from '@mui/icons-material/Send'
import { useAuth } from '../context/AuthContext'

export default function PublicProfile() {
    const { id } = useParams()
    const theme = useTheme()
    const [annonce, setAnnonce] = useState('')
    const [myMail, setMyMail] = useState<string>('')
    const [messageBody, setMessageBody] = useState<string>('')
    const [publicProfile, setPublicProfile] = useState<PublicProfileType>()
    const handleChange = (e: SelectChangeEvent) => {
        setAnnonce(e.target.value)
    }
    const { state } = useAuth()
    const token = state.token
    const requestParams: RequestType = {
        endpoint: '/profile/' + id,
        method: 'GET',
    }
    async function getPublicProfile() {
        try {
            await RequestMethod(requestParams)
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

    async function getMyMail() {
        try {
            await RequestMethod({
                endpoint: '/user/me',
                method: 'GET',
                token,
            })
                .then((response) => response.json())
                .then((data) => {
                    setMyMail(data.email)
                })
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }
    React.useEffect(() => {
        getPublicProfile()
        getMyMail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    async function sendMessage() {
        const requestParams: RequestType = {
            endpoint: '/contact-author',
            method: 'POST',
            body: {
                to: publicProfile?.id, // récupérer le mail de l'utilisateur
                from: myMail,
                source: annonce,
                messageBody,
            },
            customHeaders: {
                'Content-Type': 'application/json',
            },
        }
        try {
            await RequestMethod(requestParams).then((response) =>
                response.json()
            )
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    return (
        <CustomContainer>
            {publicProfile && (
                <Typography variant="h2">
                    {publicProfile.firstname + ' '}
                    {publicProfile.lastname}
                </Typography>
            )}
            <Divider sx={{ width: '60%', m: '3rem 0' }} />
            <Typography variant="h5" sx={{ mb: 4 }}>
                Me contacter :
            </Typography>
            <Grid flexDirection="column">
                <FormControl variant="standard" sx={{ mb: 4, minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                        Annonce concernée :
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={annonce}
                        onChange={handleChange}
                        label="Age"
                    >
                        {publicProfile?.Offers.map(({ title }, index) => (
                            <MenuItem key={index} value={title}>
                                {title}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Grid sx={{ flexDirection: 'row', width: '100%' }}>
                    <TextField
                        onChange={(e) => setMessageBody(e.target.value)}
                        variant="outlined"
                        label="Message"
                        sx={{ width: '20rem', display: 'flex' }}
                    />
                    <IconButton onClick={sendMessage} sx={{ display: 'flex' }}>
                        <SendIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Divider sx={{ width: '60%', m: '3rem 0' }} />
            {publicProfile?.Offers ? (
                <OffersCarousel {...{ theme, offers: publicProfile?.Offers }} />
            ) : (
                <Typography variant="h5">Aucune offre publiée</Typography>
            )}
        </CustomContainer>
    )
}
