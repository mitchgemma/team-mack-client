import React, { useState } from 'react'
import { postComment } from '../../api/comments'
import {Modal} from 'react-bootstrap'
import CommentForm from '../shared/CommentForm'

const CreateComment = (props) => {
    const {user, favorite, handleClose, msgAlert, show } = props

    const [comment, setComment] = useState({})
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

        console.log('the comment to submit', comment)
        postComment(user, favorite.id, comment)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())

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
    console.log('this is show', show)
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <CommentForm
                    comment={comment}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Leave a comment!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default CreateComment