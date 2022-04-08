import apiUrl from '../apiConfig'
import axios from 'axios'


// INDEX -> all Comments
export const getAllComments = (user) => {
    return axios({url: `${apiUrl}/comments`})
}


// POST -> create function
export const postComment = (user, favoriteId, newComment) => {
    console.log('user', user)
    console.log('this is new Comment', newComment)
    return axios({
        url: `${apiUrl}/comments/${favoriteId}`,
        method: 'POST',
        data: { comment: newComment }
    })
}

// PATCH -> update function
export const updateComment = (user, favoriteId, commentId, updatedComment) => {
    console.log('user', user)
    console.log('this is newComment', updatedComment)
    return axios({
        url: `${apiUrl}/comments/${favoriteId}/${commentId}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { comment: updatedComment }
    })
}

// DELETE -> remove function
export const removeComment = (user, favoriteId, commentId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/comments/${favoriteId}/${commentId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}