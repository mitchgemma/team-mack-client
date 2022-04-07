import apiUrl from '../apiConfig'
import axios from 'axios'


// INDEX -> all Favorites
export const getAllFavorites = (user) => {
    return axios({
        url: `${apiUrl}/favorites`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        },
    })
}

// SHOW -> one Favorite
export const getOneFavorite = (id) => {
    return axios (`${apiUrl}/favorites/${id}`)
}

// DELETE -> remove a Favorite
export const removeFavorite = (user, id) => {
    // console.log('user', user)
    return axios({
        url: `${apiUrl}/favorites/${id}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}