import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import { getAllSearch } from '../../api/search.js'
import apiUrl from '../../apiConfig.js';
//import { useNavigate } from 'react-router-dom';
//import {getSearchSuccess, getSearchFailure} from '../shared/AutoDismissAlert/messages'
import SearchShow from '../Search/SearchShow'


const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}
const SearchIndex = (props) => {
    //testing
    const { searchResults, search } = props
    //const { type, name } = props.search
    let searchCards
    if (searchResults === null) {
        return (
            <>
                <h3>Please search for something</h3>
            </>
        )
    }


    else {
        searchCards = searchResults.map(searchItem => (
            // one method of styling, usually reserved for a single style
            // we can use inline, just like in html

            <Card key={searchItem.id} style={{ width: '30%' }} className="m-2">
                <Link style={{ textDecoration: "none" }}
                    to={`/search/${search.type}/${search.name}/${searchItem.id}`}>
                    {searchItem.name}
                    <Card.Header>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Card.Img variant="bottom" src={searchItem.image} />
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>

        ))

    }
    return (
        <>
            <div style={cardContainerLayout}>
                {searchCards}
            </div>
            {/* <SearchShow searchResults={searchResults} search={search} /> */}
        </>
    )
}

export default SearchIndex