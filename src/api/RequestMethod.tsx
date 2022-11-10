import { RequestType } from '../shared/types/RequestType'
import { API_PORT } from '../envVariable'

export default function RequestMethod({
    endpoint,
    method,
    body,
    formData,
    customHeaders = {},
    token,
}: RequestType) {
    const url = `http://localhost:${API_PORT}` + endpoint

    const authHeader = {
        Authorization: `Bearer ${token}`,
    }

    const headers = new Headers(
        token ? { ...authHeader, ...customHeaders } : { ...customHeaders }
    )

    const init = {
        method,
        headers,
        body: formData ? body : JSON.stringify(body),
    }

    return fetch(url, init)
}
