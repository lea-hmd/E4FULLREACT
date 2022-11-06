import { Grid, Typography } from '@mui/material'
import React from 'react'
import CustomContainer from '../components/common/custom/CustomContainer'

export default function PageNotFound() {
    return (
        <CustomContainer>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={1}
                my={10}
            >
                <Grid item md={6}>
                    <Typography variant="h2" color="primary" fontWeight="bold">
                        Oups, la page demandée est introuvable ...
                    </Typography>
                </Grid>
                <Grid
                    item
                    md={6}
                    container
                    alignItems="center"
                    justifyContent="center"
                >
                    <img
                        src="https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif"
                        alt="Image 404"
                        style={{ width: '70%' }}
                    />
                </Grid>
            </Grid>
        </CustomContainer>
    )
}
