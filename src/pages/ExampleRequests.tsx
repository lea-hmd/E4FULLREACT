import React from 'react'
// import request from '../api/Request'
// import { RequestType } from '../shared/types/RequestType'
// import { Page } from '../shared/types/Page'
export default function ExampleRequests() {
    /* Exemple de route GET

        const requestParams: RequestType = {
            endpoint: '/offers-categories',
            method: 'GET',
        }
*/
    /* Exemple de route POST

    //Toujours ajouter le type correspondant en fonction du corps du body à envoyer ici Page
        const requestBody: Page = {
            id: 4,
            link: 'link',
            title: 'title',
        }

    //Toujours garder le type RequestType pour s'assurer de l'envoi des bon paramètres à l'api
        const requestParams: RequestType = {
            endpoint: '/pages',
            method: 'POST',
            body: requestBody,
    //Ajout d'headers supplémentaires si route protégée ou si besoin

    customHeaders: {
        Authorization: `Bearer ${token}`,
    },
        }
*/
    //Mettre la requête dans le useEffect permet de lancer l'appel API à chaque évènement sur la page, cela est pratique pour l'affichage de tous les produits par exemple, sinon faire l'appel dans une fonction handle***Click par exemple pour déclencher la requête uniquement lors du clic
    //     React.useEffect(() => {
    //         request(requestParams)
    //             .then((response) => response.json())
    //             .then((json) => console.log(json))
    //     }, [])

    return <div>ExampleRequests</div>
}
