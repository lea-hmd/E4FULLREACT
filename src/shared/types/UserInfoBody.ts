// Use this body type for 'POST: /registration' and 'PUT: /user/:id' routes
export type UserInfoBody = {
    email: string
    password: string
    firstname: string
    lastname: string
    phone: number
    address: string
    zip_code: number
    city: string
    country: string
    identifical_file: any
    profile_picture: any
}
