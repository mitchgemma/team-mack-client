import apiUrl from '../apiConfig'
import axios from 'axios'

// POST -> create function
export const createProfile = (user, newProfile) => {
  console.log('user', user)
  console.log('this is newProfile', newProfile)
  return axios({
    url: `${apiUrl}/profile`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${user.token}`,
    },
    data: { profile: newProfile },
  })
}

// PATCH -> update function
export const updateProfile = (user, updatedProfile, _id) => {
  console.log('user', user)
  console.log('this is newProfile', updatedProfile)
  return axios({
    url: `${apiUrl}/user/${_id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${user.token}`,
    },
    data: { profile: updatedProfile },
  })
}

// SHOW -> Show the profile
export const getProfile = (user) => {
  console.log('user in axios,', user)
  return axios({
    url: `${apiUrl}/profile`,
    headers: {
      Authorization: `Token token=${user.token}`,
    },
  })
}
