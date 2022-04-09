import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import CommentForm from '../shared/CommentForm'
import { postComment } from '../../api/comments'

const CreateComment = (props) => {
    const {user, favorite, show, handleClose, msgAlert, triggerRefresh } = props
    const [comment, setComment] = useState({})

    const handleChange = (e) => {
        // e === event
        e.persist()

        setComment(prevComment => {
            const name = e.target.name
            let value = e.target.value
            // console.log('etarget type', e.target.type)
           
            const updatedValue = { [name]: value }

            console.log('prevComment', prevComment)
            console.log('updatedValue', updatedValue)

            return {...prevComment, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        postComment(user, favorite._id, comment)
            // console.log('this is the fav', favorite.performers[0].id)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            .then(() => triggerRefresh())
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Something is wrong!',
                    variant: 'danger',
                }))
        console.log('this is the comment', comment)
    }

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