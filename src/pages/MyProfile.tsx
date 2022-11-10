import React from 'react'

import request from '../api/Request'
import MyProfileCard from '../components/profile/MyProfileCard'
import { useAuth } from '../context/AuthContext'
import { RequestType } from '../shared/types/RequestType'
import { useTheme } from '@mui/material/styles'

export default function Signin() {
    const { state } = useAuth()
    const token = state.token
    const theme = useTheme()

    const [profile, setProfile] = React.useState(null)

    const requestParams: RequestType = {
        endpoint: '/user/me',
        method: 'GET',
        customHeaders: {
            Authorization: `Bearer ${token}`,
        },
    }

    async function getMyProfile() {
        try {
            await request(requestParams)
                .then((response) => response.json())
                .then((data) => setProfile(data))
        } catch (error: any) {
            // eslint-disable-nzext-line no-console
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    React.useEffect(() => {
        getMyProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <MyProfileCard {...{ theme, profile }} />
}
