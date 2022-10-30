// Use this body type for 'POST: /contact-author' route
export type ContactAuthorBody = {
    to: string
    from: string
    source: string
    messageBody: string
}
