import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
//import { getAllSearch } from '../../api/search.js'
import apiUrl from '../../apiConfig.js';
//import { useNavigate } from 'react-router-dom';
//import {getSearchSuccess, getSearchFailure} from '../shared/AutoDismissAlert/messages'

const SearchIndex = (props) => {

    const {searchResults} = props
    
    if (searchResults === null){
        return(
            <>
            <h3>Please search for something</h3>
            </>
    )
}
    else {
        return(
            <h3>testing</h3>
        )
    }
    
}

export default SearchIndex