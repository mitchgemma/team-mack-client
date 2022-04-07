import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig.js';
import { getOneSearch } from '../../api/search.js'
import { useEffect } from 'react';
import { searchShowFailure } from '../shared/AutoDismissAlert/messages'

const SearchShow = (props) => {
    const { id } = useParams()
    const {user, msgAlert, searchResults } = props
    const [showResult, setShowResult] = useState(null)
    
    useEffect(() => {
        getOneSearch(id)
        .then(res => {
        setShowResult(res.data)
        
        }
        )
        // .catch(() => {
        //     msgAlert({
        //         heading: 'Oops!',
        //         message: searchShowFailure,
        //         variant: 'danger',
        //     })
        // })
    }, [])
return (
    <h3>hi</h3>
)
}

export default SearchShow