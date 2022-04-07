import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import CommentForm from '../shared/CommentForm'
import {updateComment} from '../../api/comments.js'

const EditCommentModal = (props) => {
    const { user, favorite, show, handleClose, msgAlert, triggerRefresh } = props
    const [comment, setComment] = useState(props.comment)

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
        updateToy(user, favorite.id, comment._id, comment)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'Comment updated!',
                    message: 'great! thanks!',
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'that aint it',
                    variant: 'danger',
                }))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <CommentForm
                    comment={comment}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditCommentModal