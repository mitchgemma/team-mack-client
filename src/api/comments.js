import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX -> all Comments
export const getAllComments = (seatGeekId) => {
    return axios({
        url: `${apiUrl}/comments/${seatGeekId}`,
        method: 'GET'
    })
}


// POST -> create function
// since no longer retreiveing comments from favorites, we will retrieve from seatgeek id 
// 
export const postComment = (user, seatGeekId, newComment) => {
    console.log('user', user)
    console.log('this is new Comment', newComment)
    return axios({
        url: `${apiUrl}/comments/${seatGeekId}`,
        method: 'POST',
        // header: {
        //     Authorization:`Token token=${user.token}`
        // },
        data: { comment: {  
            text: newComment.comment,
            owner: user._id,
            seatGeekId: seatGeekId
             } 
         }
    })
}

// // PATCH -> update function
// export const updateComment = (user, id, commentId, updatedComment) => {
//     console.log('user', user)
//     console.log('this is newComment', updatedComment)
//     return axios({
//         url: `${apiUrl}/comments/${id}/${commentId}`,
//         method: 'PATCH',
//         headers: {
//             Authorization: `Token token=${user.token}`
//         },
//         data: { comment: updatedComment }
//     })
// }

// // DELETE -> remove function
// export const removeComment = (user, id, commentId) => {
//     console.log('user', user)
//     return axios({
//         url: `${apiUrl}/comments/${id}/${commentId}`,
//         method: 'DELETE',
//         headers: {
//             Authorization: `Token token=${user.token}`
//         }
//     })
// }