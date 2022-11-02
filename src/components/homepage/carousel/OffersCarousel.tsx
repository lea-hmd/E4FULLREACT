import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Grid, Theme } from '@mui/material'

import CarouselOfferCard from './CarouselOfferCard'
import { SectionTitle } from '../../common/titles/CustomTitles'

import CustomContainer from '../../common/custom/CustomContainer'
import { RequestType } from '../../../shared/types/RequestType'
import request from '../../../api/Request'

type OffersCarouselProps = {
    theme: Theme
}

export default function OffersCarousel({ theme }: OffersCarouselProps) {
    const [offers, setOffers] = React.useState([])

    const requestParams: RequestType = {
        endpoint: '/search?key=',
        method: 'GET',
    }

    async function getOffers() {
        try {
            await request(requestParams)
                .then((response) => response.json())
                .then((data) => setOffers(data))
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    React.useEffect(() => {
        getOffers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <CustomContainer>
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
                            { title, price, product_picture, category },
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
