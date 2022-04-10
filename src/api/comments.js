import apiUrl from '../apiConfig'
import axios from 'axios'


// POST -> create function

// since no longer retreiveing comments from favorites, we will retrieve from seatgeek id 
// 
export const postComment = (user, id, newComment) => {
    console.log('user', user)
    console.log('this is new Comment', newComment)
    return axios({
        url: `${apiUrl}/comments/${id}`,
        method: 'POST',
        // header: {
        //     Authorization:`Token token=${user.token}`
        // },
        data: { comment: newComment }
    })
}

// PATCH -> update function
export const updateComment = (user, id, commentId, updatedComment) => {
    console.log('user', user)
    console.log('this is newComment', updatedComment)
    return axios({
        url: `${apiUrl}/comments/${id}/${commentId}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { comment: updatedComment }
    })
}

// DELETE -> remove function
export const removeComment = (user, id, commentId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/comments/${id}/${commentId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}