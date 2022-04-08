import apiUrl from '../apiConfig'
import axios from 'axios'


// POST -> create function

// since no longer retreiveing comments from favorites, we will retrieve from seatgeek id 
// 
export const postComment = (user, favId, newComment) => {
    console.log('user', user)
    console.log('this is new Comment', newComment)
    return axios({
        url: `${apiUrl}/comments/${favId}`,
        method: 'POST',
        data: { comment: newComment }
    })
}

// PATCH -> update function
export const updateComment = (user, favId, commentId, updatedComment) => {
    console.log('user', user)
    console.log('this is newComment', updatedComment)
    return axios({
        url: `${apiUrl}/comments/${favId}/${commentId}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { comment: updatedComment }
    })
}

// DELETE -> remove function
export const removeComment = (user, favId, commentId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/comments/${favId}/${commentId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}