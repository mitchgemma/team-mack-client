import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { getAllSearch } from '../../api/search.js'
import { createSearch } from '../../api/search.js';
import apiUrl from '../../apiConfig.js';
import { useNavigate } from 'react-router-dom';
// we need to render a form that allows the user to search (events, venues, performers)
const getSearch = (props) => {
    const {user, msgAlert} = props
    const navigate = useNavigate()
// we want to set the state of search for both type and name   

    // we want to pass in the values we get from search forms
    const [ search, setSearch] = useState({type: '', name: ''})
    // that we assigned to state and pass them in as parameters 
    // to getAllSearch

    // then have something that handles the change (handleChange function)
    const handleChange = (e) => {
        e.persist()

        setSearch(prevSearch => {
            // I used let as they aren't a constant variable as they are changing
            let type = e.target.name
            let value = e.target.value
            console.log('this is e.target.type', e.target.type)
            // if(type === "events" && name === " "){
            //     // value = true \\ I dont know actually what should be the value
            // } else if (type === "venues" && name === " "){
            //     // value = false
            // }else if(type === "performers" && name === " ") {
            //     value = parseInt(e.target.value)
            // }
            const updatedValue = { [type]: value }


            console.log('prevType', prevSearch)
            console.log('updatedValue', updatedValue)

            return { ...prevType, ...updatedValue }
        })
    
      

    }
    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()
        getAllSearch(search.type, search.name )
        // if create is successful we shoudl navigate to the show page
        .then(res => {navigate(`${apiUrl}/search/${type}/${name}`)})
           //then we send a success message
           .then(() =>
           msgAlert({
               heading: 'Yay!',
               message: getSearchSuccess,
               variant: 'success',
           }))
       // if there is an error, we'll send an error message
       .catch(() =>
           msgAlert({
               heading: 'Oh No!',
               message: getSearchFailure,
               variant: 'danger',
           }))

        console.log('this is the type', type)
    }

    // want something to submit the form (getAllSearch)
    return (
        <>

<Form onSubmit={handleSubmit}>
            <Form.Group controlId='type'>
                <Form.Control
                    placeholder='events, performers, venues'
                    name={search.type}
                    value={search.type}
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group controlId='name'>
                <Form.Control
                    placeholder='name of event, artist, or venue'
                    value={search.name}
                    name={search.name}
                    onChange={handleChange}
                />
                </Form.Group>
            <Button variant="primary" type="submit" >
                SEARCH
            </Button>
            </Form>
        </>
    )
}
export default GetSearch
