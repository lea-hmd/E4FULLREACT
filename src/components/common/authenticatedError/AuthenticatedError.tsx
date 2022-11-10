import { Grid, Typography } from '@mui/material'
import React from 'react'
import CustomContainer from '../custom/CustomContainer'

export default function AuthenticatedError() {
    return (
        <CustomContainer>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={1}
                my={10}
            >
                <Grid
                    item
                    md={6}
                    container
                    alignItems="center"
                    justifyContent="center"
                >
                    <img
                        src="https://64.media.tumblr.com/e27cb0108080a13a7618a34d4492aae8/tumblr_om3wzrm1ou1rn5gv3o1_500.gif"
                        alt="Image erreur d'authentification"
                        style={{ width: '70%' }}
                    />
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h2" color="primary" fontWeight="bold">
                        Une authentification est nécessaire pour accéder à ce
                        contenu !
                    </Typography>
                </Grid>
            </Grid>
        </CustomContainer>
    )
}
