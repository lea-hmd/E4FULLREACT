import React from 'react'
import { Typography, CardMedia } from '@mui/material'

import BanderoleImage from '../../../assets/images/banderole.jpg'
import CustomContainer from '../../common/custom/CustomContainer'

type BanderoleProps = {
    offers: any
}

export default function Banderole({ offers }: BanderoleProps) {
    return (
        <CustomContainer>
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
        </CustomContainer>
    )
}
