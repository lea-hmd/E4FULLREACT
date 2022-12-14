import React from 'react'
import { Grid, Theme, Typography } from '@mui/material'

import OfferCard from '../offer/OfferCard'

type AllOffersProps = {
    theme: Theme
    filteredOffers?: any
}

export default function FilteredOffers({
    theme,
    filteredOffers,
}: AllOffersProps) {
    return (
        <Grid container spacing={3} justifyContent="center" mt={3}>
            {filteredOffers?.length ? (
                <>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            textAlign="center"
                            fontWeight="bold"
                            variant="h6"
                            gutterBottom
                        >
                            {filteredOffers?.length} résultats trouvés
                        </Typography>
                    </Grid>
                    {filteredOffers?.map(
                        (
                            offer: any,
                            //TODO: Fix any type
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
                                <OfferCard
                                    myOffer={false}
                                    {...{
                                        theme,
                                        offer,
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
