import apiUrl from '../apiConfig'
import axios from 'axios'


// POST -> create function
export const postComment = (user, id, newComment) => {
    console.log('user', user)
    console.log('this is newPet', newNewComment)
    return axios({
        url: `${apiUrl}/favorites/${id}`,
        method: 'POST',
        data: { toy: newComment }
    })
}