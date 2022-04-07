import { postComment } from '../../api/comments'
import React, { useState, useEffect } from 'react'
import CommentForm from '../shared/CommentForm'


const IndexComments = (props) => {
    const [comment, setComment] = useState({text: null, seatGeekId: null})

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()
        postComment(comment.text, comment.seatGeekId)
        // if create is successful, navigate to the show page
        .then(res => {
            setComment(res.data.seatGeekId)
            console.log(comment)    
        })

    return (
        <div>
            <CommentForm 
                comment={comment}
                handleSubmit={handleSubmit}
            />
        </div>
    )
    }
}
export default IndexComments