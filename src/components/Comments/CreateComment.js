import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createComment } from '../../api/comment'
import { useNavigate } from 'react-router-dom'
import CommentForm from '../shared/CommentForm'

const CreateComment = (props) => {
    const {user, msgAlert} = props
    console.log('user in create', user)
    const navigate = useNavigate()
    
    const [comment, setComment] = useState({text: ''})
    console.log('comment in create', comment)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setComment(prevComment => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
           
            const updatedValue = { [name]: value }

            console.log('prevComment', prevComment)
            console.log('updatedValue', updatedValue)

            return {...prevComment, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createComment(user, comment)
            // if create is successful, we should navigate to the show page
            .then(res => {navigate(`/comments/${res.data.favorite.id}`)})

            .then(() =>
                msgAlert({
                    heading: 'Comment Added! Success!',
                    message: 'Awesome!',
                    variant: 'success',
                }))
   
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Something is wrong!',
                    variant: 'danger',
                }))
        console.log('this is the comment', comment)
    }

    return (
        <CommentForm 
            comment={comment}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add new comment!"
        />
    )
}

export default CreateComment