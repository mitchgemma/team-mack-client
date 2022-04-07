import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import PetForm from '../shared/PetForm'

const EditProfileModal = (props) => {
    const { user, show, handleClose, updateProfile, msgAlert, triggerRefresh } = props
    const [profile, setProfile] = useState(props.pet)

    const handleChange = (e) => {
    // e === event
    e.persist()
    setProfile((prevProfile) => {
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

    updateProfile(user, profile)
            .then(() => handleClose())
            .then(() => triggerRefresh())
      
  }
    
}