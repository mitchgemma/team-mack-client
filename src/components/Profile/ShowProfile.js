import React, { useState, useEffect } from 'react'
import { getProfile, updateProfile } from '../../api/profile'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import EditProfileModal from './EditProfileModal'

const cardContainerLayout = {
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'row wrap',
}

const ShowProfile = (props) => {
  const [profile, setProfile] = useState({})
    const [modalOpen, setModalOpen] = useState(false)

  const { id } = useParams()
  const { user } = props
    const [updated, setUpdated] = useState(false)

  console.log('id in showProfile', id)
 
  useEffect(() => {
    getProfile(id).then((res) => {
      console.log('show response', res.data)
      setProfile(res.data)
    })
  }, [updated])
  console.log('profile in show', profile)

    return (
      <>
      <Container className="fluid">
        <Card>
          <Card.Header>{profile.firstName}</Card.Header>
          <Card.Body>
            <Card.Text>
              <small>City: {profile.city}</small>
              <br />
              <small>State: {profile.state}</small>
              <br />
              <small>Zipcode: {profile.zipcode}</small>
              <br />
              <small>Favorite Genres: {profile.genres}</small>
              <br />
              <small>
                Open to recommendations: {profile.openToNewMusic ? 'yes' : 'no'}
              </small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              onClick={() => setModalOpen(true)}
              className="m-2"
              variant="warning"
              >
              Edit Profile
            </Button>
          </Card.Footer>
        </Card>
      </Container>
      <EditProfileModal
        profile={profile}
        show={modalOpen}
        user={user}
        triggerRefresh={() => setUpdated((prev) => !prev)}
        updateProfile={updateProfile}
        handleClose={() => setModalOpen(false)}
        />
    </>
  )
}


export default ShowProfile
