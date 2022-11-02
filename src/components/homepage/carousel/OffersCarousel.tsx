import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Grid, Theme, Container, useMediaQuery } from '@mui/material'

import CarouselOfferCard from './CarouselOfferCard'
import { SectionTitle } from '../../common/titles/CustomTitles'

import { fakeOffers } from '../../../db/fakeOffers'

type OffersCarouselProps = {
    theme: Theme
}

export default function OffersCarousel({ theme }: OffersCarouselProps) {
    //TODO: Léa - Change this data with the api response
    const offers = fakeOffers
    const xlScreen = useMediaQuery('(min-width:1440px)')

    return (
        <Container maxWidth={xlScreen ? 'lg' : 'md'} sx={{ mb: 7 }}>
            {/* TODO: Léa - Refactorisation du composant container */}
            <SectionTitle title="Dernières annonces" />
            {/* TODO: Léa - Change style later */}
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={5000}
                centerMode
                focusOnSelect
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                shouldResetAutoplay
                slidesToSlide={1}
                swipeable
                autoPlay
                responsive={{
                    largeScreen: {
                        breakpoint: {
                            max: 5000,
                            min: 1400,
                        },
                        items: 4,
                    },
                    desktop: {
                        breakpoint: {
                            max: 1440,
                            min: 768,
                        },
                        items: 3,
                    },
                    tablet: {
                        breakpoint: {
                            max: 768,
                            min: 464,
                        },
                        items: 2,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                    },
                }}
            >
                {offers
                    .map(
                        (
                            {
                                title,
                                description,
                                price,
                                category,
                                productPicture,
                            },
                            index
                        ) => (
                            <Grid
                                item
                                container
                                justifyContent="center"
                                key={index}
                            >
                                <CarouselOfferCard
                                    {...{
                                        theme,
                                        title,
                                        category,
                                        description,
                                        price,
                                        productPicture,
                                    }}
                                />
                            </Grid>
                        )
                    )
                    .reverse()
                    .slice(0, 5)}
            </Carousel>
        </Container>
    )
}
