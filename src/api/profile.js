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

// PATCH -> update function
export const updateProfile = (user, updatedProfile) => {
    console.log('user', user)
    console.log('this is newProfile', updatedProfile)
    return axios({
        url: `${apiUrl}/user/${updatedProfile.id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { profile: updatedProfile }
    })
}


// SHOW -> Show the profile
export const getProfile = (profileId) => {
  return axios(`${apiUrl}/user/${profileId}`)
}
