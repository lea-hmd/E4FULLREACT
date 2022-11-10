import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Grid, Theme } from '@mui/material'

import CarouselOfferCard from './CarouselOfferCard'
import { SectionTitle } from '../../common/custom/CustomTitles'
import CustomContainer from '../../common/custom/CustomContainer'

type OffersCarouselProps = {
    theme: Theme
    offers: any
}

export default function OffersCarousel({ theme, offers }: OffersCarouselProps) {
    return (
        <CustomContainer>
            <SectionTitle title="Dernières annonces" />
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
                                id,
                                title,
                                price,
                                product_picture,
                                category,
                            }: any,
                            index: React.Key
                        ) => (
                            <Grid
                                item
                                container
                                justifyContent="center"
                                key={index}
                            >
                                <CarouselOfferCard
                                    {...{
                                        id,
                                        theme,
                                        title,
                                        price,
                                        product_picture,
                                        category,
                                    }}
                                />
                            </Grid>
                        )
                    )
                    .reverse()
                    .slice(0, 5)}
            </Carousel>
        </CustomContainer>
    )
}
