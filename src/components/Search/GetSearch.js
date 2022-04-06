// import React, { useState } from 'react'
// import { Form, Button } from 'react-bootstrap';
// import { getAllSearch } from '../../api/search.js'

// // we need to render a form that allows the user to search (events, venues, performers)
// const GetSearch = (props) => {
//     const [ search, setSearch ] = useState(null)
//     const { user } = props
//     getAllSearch()
//     return(
//         <>
        
//         <Form>
//         <Form.Group controlId='search'>
//                         <Form.Label>SRCH SMTHNG</Form.Label>
//                         <Form.Control
//                             required
//                             type='events, venues, performers'
//                             value={type.type}
//                             placeholder='Search Here'
//                             onChange={e => getAllSearch(e.target.value)}
//                         />
//                         </Form.Group>
//         <Button variant="primary" type="submit">
//             SEARCH
//         </Button>
//         </Form>
//         </>
//     )
// }

// export default GetSearch
