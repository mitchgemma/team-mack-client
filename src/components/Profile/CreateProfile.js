import React, { useState } from 'react'
import { createProfile } from '../../api/profile'
import { useNavigate } from 'react-router-dom'
import ProfileForm from '../shared/ProfileForm'

const CreateProfile = (props) => {
  const { user, msgAlert } = props
  console.log('user in create', user)
  const [profile, setProfile] = useState({
    name: '',
    city: '',
    state: '',
    genres: [],
    openToNewMusic: false,
  })
  console.log('profile in create', profile)

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

  return (
    <ProfileForm
      profile={profile}
      handleChange={handleChange}
      //   handleSubmit={handleSubmit}
      heading="Create a new Profile!"
    />
  )
}

export default CreateProfile
