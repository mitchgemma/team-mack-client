import apiUrl from '../apiConfig'
import axios from 'axios'


// POST -> create function
export const postComment = (user, newComment) => {
    console.log('user', user)
    console.log('this is newPet', newComment)
    return axios({
        url: `${apiUrl}/comments`,
        method: 'POST',
        data: { comment: newComment }
    })
}