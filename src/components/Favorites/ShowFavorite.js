import React, { useState, useEffect } from 'react'
import { getOneFavorite, removeFavorite } from '../../api/favorites'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import { showFavoriteFailure } from '../shared/AutoDismissAlert/messages'
import ShowComments from '../Comments/ShowComments'
import CreateComment from '../Comments/CreateComment'


const ShowFavorite = (props) => {
    const [favorite, setFavorite] = useState(null)
    const [seatGeekId, setSeatGeekId] = useState(null)
    const [commentModalOpen, setCommentModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const { user, msgAlert, comment } = props
    const { id } = useParams()
    const navigate = useNavigate()

    
    useEffect(() => {
        console.log('this is the favorite id', id)
        getOneFavorite(id)
            .then(res => {
                console.log('this is the res.data.favorite', res.data.favorite)
                console.log('this is the res.data', res.data)
                setFavorite(res.data.favorite)
                setSeatGeekId(res.data.seatGeekId)
                console.log('this is the res.data.favorite2', res.data.favorite)
            }
            )
            
            .catch(() => {
                msgAlert({
                    heading: 'No favorite found',
                    message: showFavoriteFailure,
                    variant: 'danger',
                })
            })
    }, [updated])
    
    // function to remove the favorite at click
    const removeTheFav = () => {
        removeFavorite(user, id)
            
            .then(() => {navigate(`/favorites/id`)})
            .catch(() => {
                msgAlert({
                    heading: 'something went wrong',
                    message: 'that aint it',
                    variant: 'danger',
                })
            })
    }

    //     commentCards = comments.map(comment => (
        
        //         <Card key={comment.id} style={{ width: '30%' }} className="m-2" >
        //             <Card.Header>{comment.text}</Card.Header>
        //             <Card.Body>
        //                 <Card.Text>
        //                 </Card.Text>
        //             </Card.Body>
        //         </Card>
        //     ))
        // }
        
        
        
    let commentCards
    console.log('this is the **comment', comment)
    if (comment) {
        commentCards = comment.map(comment=> (
            <ShowComments
                key={id} comment={comment} favorite={favorite} seatGeekId={seatGeekId}
                user={user} msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
            />
        ))
        
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
                            seatGeekId={seatGeekId}
                            id={id}
                            show={commentModalOpen}
                            user={user}
                            msgAlert={msgAlert}
                            triggerRefresh={() => setUpdated(prev => !prev)}
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