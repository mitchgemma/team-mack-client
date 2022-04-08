import React, { useState, useEffect } from 'react'
import { getOneFavorite, removeFavorite } from '../../api/favorites'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import {showFavoriteSuccess, showFavoriteFailure} from '../shared/AutoDismissAlert/messages'
import ShowComments from '../Comments/ShowComments'
import CreateComment from '../Comments/CreateComment'


const ShowFavorite = (props) => {
    const [favorite, setFavorite] = useState(null)
    const [commentModalOpen, setCommentModalOpen] = useState(false)
    const { user, msgAlert } = props
    const { id } = useParams()
    const navigate = useNavigate()
    // console.log('id in showFavorite', favorite)
    console.log('id in props', props)

    
    useEffect(() => {
        getOneFavorite(id)
            .then(res => {
                setFavorite(res.data.favorite)
                console.log ('this is the res data favorite', res.data.favorite)
                console.log ('this is the res data ', res.data)
            }
                )
            
            .catch(() => {
                msgAlert({
                    heading: 'No favorite found',
                    message: showFavoriteFailure,
                    variant: 'danger',
                })
            })
    }, [])
    
    // function to remove the favorite at click
    const removeTheFav = () => {
        removeFavorite(user,id)
            .then(() => {
                msgAlert({
                    heading: 'your pick was removed from your favorites',
                    message: 'theyre gone',
                    variant: 'success',
                })
            })
            .then(() => {navigate(`/favorites`)})
            .catch(() => {
                msgAlert({
                    heading: 'something went wrong',
                    message: 'that aint it',
                    variant: 'danger',
                })
            })
    }

    let commentCards
    if (favorite) {
        console.log('this is the favorite', favorite)
        if (favorite.comments) {
            commentCards = favorite.comments.map(comment => (
                // need to pass all props needed for updateToy func in edit modal
                <ShowComments
                    key={comment._id} comment={comment} favorite={favorite} 
                    user={user} msgAlert={msgAlert}
                    // triggerRefresh={() => setUpdated(prev => !prev)}
                />
            ))
        }
    }

    if (!favorite) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }


    // takes the object key and make it into a sting.
    let typeFav = Object.keys(favorite)
    // console.log ( 'this is the string', typeFav)

    // let eventDate = moment(favorite.events[0].datetime_local).format("YYYY/MM/DD")

    // renders VENUES //
    if ( typeFav[0] === 'venues' ) {
        return (
            <Container className="fluid">
                <Card>
                    <Card.Header>{favorite.venues[0].name} <br/>
                        <small>{favorite.venues[0].city}, {favorite.venues[0].state}</small><br/>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>{favorite.venues[0].url}</small><br/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => removeTheFav()}className="m-2" variant="danger">
                            Remove the venue
                        </Button> 
                    </Card.Footer>
                </Card>
            </Container>
        )

    // renders PERFORMERS //    
    } else if ( typeFav[0] === 'performers' ) {
        return (
            <Container className="fluid">
                <Card>
                    <Card.Header>{favorite.performers[0].name} <br/>
                        <small></small><br/>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <img fluid className="justify-content-center" src={favorite.performers[0].image} alt={favorite.performers[0].name}/><br/>
                            <small></small><br/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => removeTheFav()}className="m-2" variant="danger">
                            Remove the performer
                        </Button>
                        <Button onClick={() => setCommentModalOpen(true)} className="m-2" variant="info">
                            Leave a comment
                        </Button>
                        <CreateComment
                            favorite={favorite}
                            show={commentModalOpen}
                            user={user}
                            msgAlert={msgAlert}
                            // triggerRefresh={() => setUpdated(prev => !prev)}
                            handleClose={() => setCommentModalOpen(false)}
                        />
                    </Card.Footer>
                </Card>
            </Container>
        )

    // renders EVENTS //
    } else if ( typeFav[0] ===  'events' ) {
        return (
        
            <Container className="fluid">
                <Card>
                    <Card.Header>{favorite.events[0].short_title} <br/>
                        <small></small><br/>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small> {favorite.events[0].datetime_local} </small><br/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => removeTheFav()}className="m-2" variant="danger">
                            Remove the event
                        </Button>
                    </Card.Footer>
                </Card>
            </Container>   
        )    
    }
}

export default ShowFavorite