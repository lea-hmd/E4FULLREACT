// Use this body type for 'POST: /registration' and 'PUT: /user/:id' routes
export type UserInfoBody = {
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    phone: string | null
    address: string | null
    zip_code: string | null
    city: string | null
    country: string | null
    identifical_file: FileList | null
    profile_picture: FileList | null
}
