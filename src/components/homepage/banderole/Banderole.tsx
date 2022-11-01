import React from 'react'
import { fakeOffers } from '../../../db/fakeOffers'
import { Typography, Container, useMediaQuery, CardMedia } from '@mui/material'
import BanderoleImage from '../../../assets/images/banderole.jpg'

export default function Banderole() {
    const xlScreen = useMediaQuery('(min-width:1440px)')
    const offers = fakeOffers //TODO: Léa - Change this all offers endpoint
    return (
        <Container maxWidth={xlScreen ? 'lg' : 'md'} sx={{ mb: 7 }}>
            {/* TODO: Léa - Refactorisation du composant container */}
            <div style={{ position: 'relative' }}>
                <CardMedia
                    style={{
                        height: '24em',
                        objectFit: 'cover',
                        filter: 'blur(4px)  brightness(70%)',
                    }}
                    component="img"
                    image={BanderoleImage}
                    title="Image de couverture"
                    alt="Image de couverture"
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '33%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        textAlign="center"
                        sx={{ color: '#FFF' }}
                    >
                        Trouvez votre bonheur sur MonAnnonce parmi les{' '}
                        {offers.length ?? 0 + ' '} annonces en ligne !
                    </Typography>
                </div>
            </div>
        </Container>
    )
}
