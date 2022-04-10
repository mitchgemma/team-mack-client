import { Card } from 'react-bootstrap'

const ShowComments = (props) => {

    const { comment, favorite, user, triggerRefresh, msgAlert } = props

    console.log('id in showFavorite', comment)
    
    // useEffect(() => {
    //     getOneFavorite(id).then((res) => {
    //         console.log('show response', res.data)
    //         setComment(res.data)
    //     })
    // })

    const removeComment = () => {
        removeComment(user, favorite._id, comment._id)

            .then(() => triggerRefresh())

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
                        user && (user.id === favorite.owner.id) 
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
            {/* <CreateComment
                user={user}
                favorite={favorite}
                comment={comment}
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            /> */}
        </>
        )
}
export default ShowComments