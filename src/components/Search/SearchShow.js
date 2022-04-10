import React, { useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getOneSearch } from '../../api/search.js'
import { useEffect } from 'react';

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
    flexDirection: 'column',
    AlignItem: 'center'
}

const SearchShow = (props) => {
    const { type, name, id } = useParams()
    const { user, msgAlert, searchResults, search } = props

    const [showResult, setShowResult] = useState({})
    console.log('this is search', search)
    console.log('this is user', user)
    console.log('this is searchResults', searchResults)
    useEffect(() => {
        getOneSearch(type, name, id)
            // .then(res => {
            //     setShowResult(res.data.performers[0])
            //     console.log('this is the res.data.performers[0].name', showResult)
            //     console.log('this is the res.data.performers[0].name', res.data.performers)
            // })

            .then(res => {
                // if(res.showResult === 'performers'){}
                if (type === 'performers') {
                    setShowResult(res.data.performers[0])
                } else if (type === 'events') {
                    setShowResult(res.data.events[0])
                } else if (type === 'venues') {
                    setShowResult(res.data.venues[0])
                } else {
                    return null
                }

                // else if (search.type === 'events'){
                //     setShowResult(res.data.events[0])
                // } else if (search.type === 'venues'){
                //     setShowResult(res.data.venues[0])
                // } else {
                // return null
                // }
                console.log('this is the res.data', res.data)

                // console.log('this is showResults', showResult)
                //navigate(`/search/${search.type}/${search.name}`

                // )
            })
        // .catch(() => {
        //     msgAlert({
        //         heading: 'Oops!',
        //         message: searchShowFailure,
        //         variant: 'danger',
        //     })
        // })
    }, [])
    console.log('this is the showResult 2', showResult)

    if (showResult.type === 'band') {

        return (
            <>
                <Card style={{ width: '30%' }} className="m-2">
                    <Card.Header>
                        {showResult.name}
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Card.Img variant="bottom" src={showResult.image} />
                        </Card.Text>
                        <Button>
                        Add to Favorite
                        </Button>
                    </Card.Body>
                </Card>
                <Link style={{ textDecoration: "none" }}
                    to={`/search`}>
                    <Button>
                        Back to search
                    </Button>
                </Link>
            </>
        )
    } else if (showResult.type === 'music_festival') {
        return (
            <>
                <Card style={{ width: '30%' }} className="m-2">
                    {showResult.name}
                    <Card.Header>
                        {showResult.short_title}
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {showResult.datetime_local}
                        </Card.Text>
                        <Button>
                        Add to Favorite
                        </Button>
                    </Card.Body>
                </Card>
                <Link style={{ textDecoration: "none" }}
                    to={`/search`}>
                    <Button>
                        Back to search
                    </Button>
                </Link>
            </>
        )
    } else if (showResult.country === 'US') {
        return (
            <>
                <Card style={{ width: '30%' }} className="m-2">
                    <Card.Header>
                        {showResult.name}
                        <small>
                            {showResult.city}, {showResult.state}
                        </small>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {showResult.url}
                        </Card.Text>
                        <Button>
                        Add to Favorite
                        </Button>
                    </Card.Body>
                </Card>
                <Link style={{ textDecoration: "none" }}
                    to={`/search`}>
                    <Button>
                        Back to search
                    </Button>
                </Link>
            </>

        )
    } else {

        return (
            <>
                <Container style={cardContainerLayout} className="fluid">

                    <Card style={{ width: '30%' }} className="m-2">

                        <Card.Header>
                            {showResult.name}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Card.Img variant="bottom" src={showResult.image} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Link style={{ textDecoration: "none" }}
                        to={`/search`}>
                        <Button>
                            Back to search
                        </Button>
                    </Link>
                </Container>
            </>
        )



        // one method of styling, usually reserved for a single style
        // we can use inline, just like in html



        // one method of styling, usually reserved for a single style
        // we can use inline, just like in html



        // one method of styling, usually reserved for a single style
        // we can use inline, just like in html






        {/* <Form hidden>
            </Form> */}

    }
}

export default SearchShow