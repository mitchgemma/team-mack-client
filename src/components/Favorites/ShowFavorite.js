import React, { useState, useEffect } from 'react'
import { getOneFavorite } from '../../api/favorites'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import {showFavoriteSuccess, showFavoriteFailure} from '../shared/AutoDismissAlert/messages'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowFavorite = (props) => {

    const [favorite, setFavorite] = useState(null)
    const { user, msgAlert } = props
    const { id } = useParams()
    console.log('id in showFavorite', id)

    useEffect(() => {
        getOneFavorite(id)
            .then(res => setFavorite(res.data.favorite))
            // console.log ('this is the res data favorite', res.data.favorite)
            // console.log ('this is the res data ', res.data)
            .then(() => {
                msgAlert({
                    heading: 'Here is a favorite!',
                    message: showFavoriteSuccess,
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'No favorite found',
                    message: showFavoriteFailure,
                    variant: 'danger',
                })
            })
    }, [])

    if (!favorite) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }


    return (
      <>
        <Container className="fluid">
            <Card>
                <Card.Header>{favorite.name}</Card.Header>
                <Card.Body>
                    {/* <Card.Text>
                        <small>Age: {favorite.age}</small><br/>
                        <small>Type: {favorite.type}</small><br/>
                        <small>
                            Adoptable: {favorite.adoptable ? 'yes' : 'no'}
                        </small>
                    </Card.Text> */}
                </Card.Body>
            </Card>
        </Container>
      </>
    )
}

export default ShowFavorite