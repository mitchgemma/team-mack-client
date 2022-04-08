import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig.js';
import { getOneSearch } from '../../api/search.js'
import { useEffect } from 'react';
import { showSearchFailure, showSearchSuccess } from '../shared/AutoDismissAlert/messages'

const SearchShow = (props) => {
    const { type, name, id } = useParams()
    const { user, msgAlert, searchResults } = props
    const [showResult, setShowResult] = useState({})

    useEffect(() => {
        getOneSearch(type, name, id)
            .then(res => {
                setShowResult(res.data.performers[0])
                console.log('this is the res.data.performers[0].name', showResult)
                console.log('this is the res.data.performers[0].name', res.data.performers[0].name)
            })
        // .catch(() => {
        //     msgAlert({
        //         heading: 'Oops!',
        //         message: searchShowFailure,
        //         variant: 'danger',
        //     })
        // })
    }, [])
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
}

export default SearchShow