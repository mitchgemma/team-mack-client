import React, { useState, useEffect } from 'react'
import { getProfile } from '../../api/profile'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'

const cardContainerLayout = {
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'row wrap',
}

const ShowProfile = (props) => {
  const [profile, setProfile] = useState(null)
  const { id } = useParams()
  //   const [updated, setUpdated] = useState(false)

  console.log('id in showPet', id)

  useEffect(() => {
    getProfile(id).then((res) => {
      console.log('show response', res.data)
      setProfile(res.data)
    })
  }, [])
  console.log('profile in show', profile)

  return (
    <>
      <Container className="fluid">
        <Card>
          <Card.Header>{profile}</Card.Header>
          <Card.Body>
            <Card.Text>
              {/* <small>Age: {pet.age}</small>
              <br />
              <small>Type: {pet.type}</small>
              <br />
              <small>
                Open to recommendations: {pet.adoptable ? 'yes' : 'no'}
              </small> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default ShowProfile
