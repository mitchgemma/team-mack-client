import React, { useEffect, useState } from 'react'
import { Card, Spinner, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getOneSearch } from '../../api/search.js';
import { showSearchSuccess, showSearchFailure } from '../shared/AutoDismissAlert/messages.js';
const SearchShow = (props) => {
    const [show, setShow] = useState(null)
    const { id } = useParams()
    const { user, msgAlert, searchResults } = props
    console.log('params in searchShow', id)
    useEffect(()=> {
        getOneSearch(id)
            .then(res =>{
                setShow(res.data.show)
                console.log('this is what res data is', res.data.show)
            })
            .then(()=> {
                msgAlert({
                    heading: 'Results has show!',
                    message: showSearchSuccess,
                    variant: 'success',
                })
            })
            .catch(()=> {
                msgAlert ({
                    heading: 'Failure to show!',
                    message: showSearchFailure,
                    variant: 'danger',
                })
            })
            .catch(console.error)
    }, [id])

    if (!show) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="info">
                    <span className="visually-hidden">
                        Loading....
                    </span>
                </Spinner>
            </Container>
        )
    }
    return(
        <Card>
        <Card.Header as="h5">{show.name}</Card.Header>
        <Card.Body>
          <Card.Title>{show.type}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Favorite This</Button>
        </Card.Body>
      </Card>
    )
} 
export default SearchShow