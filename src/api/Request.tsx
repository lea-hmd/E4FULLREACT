import { RequestType } from '../shared/types/RequestType'

export default function request({
    endpoint,
    method,
    body,
    customHeaders = {},
}: RequestType) {
    //Mettre l'url de son back
    const url = 'http://localhost:3333' + endpoint
    const headers = new Headers({
        'Content-Type': 'application/json',
        ...customHeaders,
    })
    const init = {
        method,
        headers,
        body: JSON.stringify(body),
    }

    return fetch(url, init)
}
