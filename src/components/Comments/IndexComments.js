import React, { useState, useEffect } from 'react'
import { getAllComments } from '../../api/comments'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexComments = (props) => {
    const [comments, setComments] = useState(null)
    const { msgAlert } = props

    useEffect(() => {
        getAllComments()
            .then(res => {
                setComments(res.data.comments)
            })
            .then(() =>
                msgAlert({
                    heading: 'All the Comments are here!',
                    message: 'found',
                    variant: 'success',
            }))
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'something is not right',
                    variant: 'danger',
            }))
    }, [])

    if (!comments) {
        return <p>loading...</p>
    } else if (comments.length === 0) {
        return <p>no comments yet, go add some</p>
    }

    let commentCards

    if (comments.length > 0) {
 
        commentCards = comments.map(comment => (

            <Card key={comment.id} style={{ width: '30%' }} className="m-2" >
                {/* <Card.Header></Card.Header> */}
                <Card.Body>
                    <Card.Text>
                        {comment.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <>
            <h3>All the Comments</h3>
            <div style={cardContainerLayout}>
                {commentCards}
            </div>
        </>
    )
}

export default IndexComments