import apiUrl from '../apiConfig'
import axios from 'axios'


// index function
export const getAllSearch = () => {
    return axios(`${apiUrl}/search/${type}/${name}`)
}

// show function
export const getOneSearch = () => {
    return axios (`${apiUrl}/search/${type}/${name}/${id}`)
}

// // POST -> create function
// export const createPet = (user, newPet) => {
//     return axios({
//         url:`${apiUrl}/pets`,
//         method: 'POST',
//         headers: {
//             Authorization: `Token token=${user.token}`
//         },
//         data: {pet: newPet}
//     })
// }
