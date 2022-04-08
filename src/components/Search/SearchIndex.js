import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


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
                <h3>SEARCH HERE</h3>
            </>
        )
    }
    // if props.search.map === events, venues etc.

    else {
        if (search.type === 'performers') {

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
        } if (search.type === 'events') {
            searchCards = searchResults.map(searchItem => (
                // one method of styling, usually reserved for a single style
                // we can use inline, just like in html

                <Card key={searchItem.id} style={{ width: '30%' }} className="m-2">
                    <Link style={{ textDecoration: "none" }}
                        to={`/search/${search.type}/${search.name}/${searchItem.id}`}>
                        {searchItem.name}
                        <Card.Header>
                            {searchItem.short_title}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {searchItem.datetime_local}
                            </Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
            ))
        } if (search.type === 'venues') {
            searchCards = searchResults.map(searchItem => (
                // one method of styling, usually reserved for a single style
                // we can use inline, just like in html

                <Card key={searchItem.id} style={{ width: '30%' }} className="m-2">
                    <Link style={{ textDecoration: "none" }}
                        to={`/search/${search.type}/${search.name}/${searchItem.id}`}>
                        {searchItem.name}
                        <Card.Header>
                            {searchItem.name}
                            <small>
                                {searchItem.city}, {searchItem.state}
                            </small>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {searchItem.url}
                            </Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
            ))
        }

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