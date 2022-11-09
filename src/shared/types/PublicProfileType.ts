import { OfferBody } from './OfferBody'

export type PublicProfileType = {
    id: number
    firstname: string
    lastname: string
    profile_picture: File | null
    Offers: Array<OfferBody>
}
