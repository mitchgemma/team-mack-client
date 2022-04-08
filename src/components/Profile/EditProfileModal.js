import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import ProfileForm from '../shared/ProfileForm'

const EditProfileModal = (props) => {
    const { user, profile, show, handleClose, updateProfile, triggerRefresh } = props
    const [editProfile, setEditProfile] = useState(props.profile)
    const { _id } = profile
    console.log('the id', _id)
    
    const handleChange = (e) => {
    // e === event
    e.persist()
    setEditProfile((prevProfile) => {
      const name = e.target.name
      let value = e.target.value
      console.log('etarget type', value)

      if (name === 'openToNewMusic' && e.target.checked) {
        value = true
      } else if (name === 'openToNewMusic' && !e.target.checked) {
        value = false
      }
      console.log('this is e.target checked', e.target.checked)

      const updatedValue = { [name]: value }

      console.log('prevProfile', prevProfile)
      console.log('updatedValue', updatedValue)

      return { ...prevProfile, ...updatedValue }
    })
  }

      const handleSubmit = (e) => {
    // e === event
    e.preventDefault()

    updateProfile(user, editProfile, _id)
            .then(() => handleClose())
        .then(() => triggerRefresh())
          .catch(error => console.log(error))
      
  }
     return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <ProfileForm 
                    profile={profile}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit profile!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditProfileModal