import React, { useState, useEffect } from 'react'
import { getAllFavorites } from '../../api/favorites'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {indexFavoritesSuccess, indexFavoritesFailure} from '../shared/AutoDismissAlert/messages'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexFavorites = (props) => {
    const [favorites, setFavorites] = useState(null)
    const { user, msgAlert } = props

    useEffect(() => {
        getAllFavorites(user)
            .then(res => {
                console.log('this is the favorite data', res.data)
                setFavorites(res.data.favorites)
            })
            .then(() =>
                msgAlert({
                    heading: 'Here are all your favorite picks!',
                    message: indexFavoritesSuccess,
                    variant: 'success',
            }))
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: indexFavoritesFailure,
                    variant: 'danger',
            }))
    }, [])

    if (!favorites) {
        return <p>loading...</p>
    } else if (favorites.length === 0) {
        return <p>no favorite picks yet, go add some</p>
    }

    let favoriteCards

    if (favorites.length > 0) {

        favoriteCards = favorites.map(favorite => (
            // one method of styling, usually reserved for a single style
            // we can use inline, just like in html
            <Card key={favorite.id} style={{ width: '30%' }} className="m-2" >
                <Card.Header>{favorite.fullTitle}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Link to={`/favorites/${favorite._id}`}>{favorite.name}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }


    return (
        <>
        <h3>All my favorite picks</h3>
        <div style={cardContainerLayout}>
            {favoriteCards}
        </div>
    </>
    )
}

export default IndexFavorites