import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { getAllComments } from '../../api/comments'
import CreateComment from './CreateComment'


const ShowComments = (props) => {

    const { comments, user, triggerRefresh, msgAlert } = props
    // const [comments, setComments] = useState(null)

    // useEffect (() => {
    //     getAllComments(seatGeekId)
    //         .then(res => {
    //             console.log("this is res.data.comments", res.data.comments)
    //             setComments(res.data.comments)
    //         })
    // }, [])


    // const removeComment = () => {
    //     removeComment(user, favorite._id, comment._id)

    //         .then(() => triggerRefresh())

    //         .catch(() =>
    //             msgAlert({
    //                 heading: 'Oh No!',
    //                 message: 'that aint it',
    //                 variant: 'danger',
    //         }))
    // }

    let commentCards
    if (comments) {
        commentCards = comments.map(comment => (
            comment.text
        ))
        
    }

    return (
        <>
           
            {commentCards}
        </>
        )
}
export default ShowComments