import apiUrl from '../apiConfig'
import axios from 'axios'


// index function
export const getAllSearch = (type, name) => {
    return axios(`${apiUrl}/search/${type}/${name}`)
}
//show function
export const getOneSearch = (type, name, id) => {
    return axios(`${apiUrl}/search/${type}/${name}/${id}`)
}

// search function
// search function will be a post route, not creating something like a pet,
//but returning a req.body through its inputs that allows us to interpolate
//in the api call URL
// export const creatSearch = (user, type, name) => {
//     console.log('user', user)
//     return axios({
//         url: `${apiUrl}/search/${type}/${name}`,
//         method: 'POST',
//         headers: {
//             Authorization: `Token token=${user.token}`
//         },
//         data: { searchType: type, searchName:name  }
//     })
// }


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