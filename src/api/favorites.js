import apiUrl from '../apiConfig'
import axios from 'axios'


// index function
export const getAllFavorites = (user) => {
    return axios({
        url: `${apiUrl}/favorites`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        },
    })
}

// show function
export const getOneFavorite = (id) => {
    return axios (`${apiUrl}/favorites/${id}`)
}