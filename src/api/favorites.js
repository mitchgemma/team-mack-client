import apiUrl from '../apiConfig'
import axios from 'axios'


// index function
export const getAllFavorites = () => {
    return axios(`${apiUrl}/favorites`)
}

// // show function
// export const getOneFavorite = () => {
//     return axios (`${apiUrl}/favorites/${id}`)
// }