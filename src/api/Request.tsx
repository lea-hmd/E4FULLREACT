import { RequestType } from '../shared/types/RequestType'

export default function request({
    endpoint,
    method,
    body,
    customHeaders = {},
}: RequestType) {
    //Mettre l'url de son back
    const url = 'http://localhost:8082' + endpoint
    const headers = new Headers({
        ...customHeaders,
    })
    const init = {
        method,
        headers,
        body,
    }

    return fetch(url, init)
}
