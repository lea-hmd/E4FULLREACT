// Use this body type for 'POST: /admin_offer' and 'PUT: /admin_offer/:id' routes
export type OfferBody = {
    title: string
    description: string
    price: number
    category: string
    status_id: number
    productPicture: any
}
