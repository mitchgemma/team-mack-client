import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { getAllSearch } from '../../api/search.js'
import apiUrl from '../../apiConfig.js';
import { Navigate } from 'react-router-dom';
// we need to render a form that allows the user to search (events, venues, performers)
const GetSearch = (props) => {
// we want to set the state of search for both type and name   
    const [ type, setType ] = useState(null)
    const [ name, setName ] = useState(null)
    // we want to pass in the values we get from search forms
    
    // that we assigned to state and pass them in as parameters 
    // to getAllSearch
    // then have something that handles the change (handleChange function)
    const handleChange = (e) => {
        e.persist()

        setType(prevType => {
            // I used let as they aren't a constant variable as they are changing
            let type = e.target.type
            // let type = e.target.value.type
            // let name = e.target.value.name
            let name = e.target.name
            let value = e.target.value
            console.log('this is e.target.type', e.target.type)
            console.log('this is e.target checked', e.target.checked)
            if(type === "events" && name === " "){
                // value = true \\ I dont know actually what should be the value
            } else if (type === "venues" && name === " "){
                // value = false
            }else if(type === "performers" && name === " ") {
                value = parseInt(e.target.value)
            }
            const updatedValue = { [type]: value }


            console.log('prevType', prevType)
            console.log('updatedValue', updatedValue)

            return {...prevType, ...updatedValue}
        })


    }
    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()
        getAllSearch(type, )
        // if create is successful we shoudl navigate to the show page
            .then(res => {console.log(res.data.type)})
            // then we send a success message
            .catch(error => console.log(error))
            // if create is successful, we should navigate to the show page
            .then(res => {navigate(`${apiUrl}/search/${type}/${name}`)})
            // then we send a success message
            
        console.log('thsi is the type', type)
    }

    // want something to submit the form (getAllSearch)
    return(
        <>
        
        <Form>
        <Form.Group controlId='search'>
                        <Form.Label>SRCH SMTHNG</Form.Label>
                        <Form.Control
                            required
                            type='events, venues, performers'
                            placeholder='Search Here'
                            handleChange={e => getAllSearch(e.target.value)}
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
