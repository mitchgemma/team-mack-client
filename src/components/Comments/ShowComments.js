import { Card } from 'react-bootstrap'
import CreateComment from './CreateComment'

const ShowComments = (props) => {

    const { comment, favorite, user, triggerRefresh, msgAlert } = props
   

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
                        <CreateComment />
                    </small><br/>
                    
                </Card.Body>
            </Card>
        </>
        )
}
export default ShowComments