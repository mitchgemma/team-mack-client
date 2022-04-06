import apiUrl from '../apiConfig'
import axios from 'axios'


// index function
export const getAllSearch = (type, name) => {
    return axios(`${apiUrl}/search/${type}/${name}`)
}

// show function
// export const getOneSearch = () => {
//     return axios (`${apiUrl}/search/${type}/${name}/${id}`)
// }

// POST -> create function
export const createSearch = ( type, name) => {
    return axios({
        url:`${apiUrl}/search/${type}/${name}`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {type, name}
    })
}
