import React, { useEffect, useState } from 'react'
// import EditCommentModal from './EditCommentModal'
import { Card, Button } from 'react-bootstrap'
import CreateComment from './CreateComment'
import { getOneFavorite } from '../../api/favorites'

const ShowComments = (props) => {
    const [comment, setComment] = useState({})
    const [showEditModal, setShowEditModal] = useState(false)
    const { id, favorite, user, triggerRefresh, msgAlert } = props
    // const { id } = useParams()
    console.log('id in showFavorite', comment)
    
    useEffect(() => {
        getOneFavorite(id).then((res) => {
            console.log('show response', res.data)
            setComment(res.data)
        })
    })

    const removeComment = () => {
        removeComment(user, favorite._id, comment._id)
            .then(() =>
                msgAlert({
                    heading: 'Comment updated!',
                    message: 'Added to your favs.',
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
        <>
            <Card className="m-2">
                <Card.Body>
                    <small>
                        {comment.text}
                    </small><br/>
                    {
                        user && (user.id === comment.owner.id) 
                        ?
                            <>
                                {/* <Button variant="warning" onClick={() => setShowEditModal(true)}>
                                    Edit Comment
                                </Button>
                                <Button onClick={() => removeComment()}variant="danger">
                                    Delete Comment
                                </Button> */}
                            </>
                        :
                        null
                    }
                </Card.Body>
            </Card>
            <CreateComment
                user={user}
                favorite={favorite}
                comment={comment}
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            />
        </>
        )
}
export default ShowComments