import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import CreateComment from './CreateComment'

const ShowComments = (props) => {

    const { comment, favorite, seatGeekId, user, triggerRefresh, msgAlert } = props
    console.log("this is comment text", comment.text)

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

    return (
        <>
            <Card className="m-2">
                <Card.Body>
                    <small>
                        {comment.text}
                    </small><br/>
                    
                </Card.Body>
            </Card>
        </>
        )
}
export default ShowComments