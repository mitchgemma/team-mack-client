import React, { useEffect, useState } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { getOneComment, removeComment } from '../../api/comments'
import CreateComment from './CreateComment'


const ShowComments = (props) => {

    const { comments, id, user, triggerRefresh, msgAlert } = props
    const [comment, setComment] = useState(null)

    useEffect (() => {
        getOneComment(id)
            .then(res => {
                console.log("this is res.data.comment", res.data.comment)
                setComment(res.data.comment)
            })
    }, [])

    const deleteComment = () => {
        removeComment(user, comment._id)

            .then(() => triggerRefresh())

            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'that aint it',
                    variant: 'danger',
            }))
    }
    
    let commentCards
    if (comments) {
        commentCards = comments.map(comment => (
            <Container className="fluid">
                <Card>
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {comment.text}
                        </Card.Text> 
                    </Card.Body>
                    <Button className="m-2" variant="warning">
                            Edit
                    </Button>
                    <Button onClick={() => deleteComment()}className="m-2" variant="danger">
                        Delete
                    </Button>    
                </Card>
            </Container>
        ))
        
    }
    

    return (
        <>
            {commentCards}
        </>
        )
}
export default ShowComments