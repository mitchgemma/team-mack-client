import React, { useState } from 'react'
import { Card } from 'react-bootstrap'


const ShowComments = (props) => {

    const { comment, favorite, seatGeekId, user, triggerRefresh, msgAlert } = props
    console.log("this is show comments, comments:", comment)

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
            <Card.Header>Comment</Card.Header>
                <Card.Body>
                    <small>
                        {comment}
                    </small><br/>
                    
                </Card.Body>
            </Card>
        </>
        )
}
export default ShowComments