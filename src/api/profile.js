import apiUrl from '../apiConfig'
import axios from 'axios'

// POST -> create function
export const createProfile = (user, newProfile) => {
  console.log('user', user)
  console.log('this is newProfile', newProfile)
  return axios({
    url: `${apiUrl}/user`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${user.token}`,
    },
    data: { profile: newProfile },
  })
}

// SHOW -> Show the profile
export const getProfile = (profileId) => {
  return axios(`${apiUrl}/user/${profileId}`)
}
