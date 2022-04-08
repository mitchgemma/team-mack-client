import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ProfileForm = (props) => {
  const { profile, handleChange, handleSubmit, heading } = props

  return (
    <Container className="justify-content-center">
      <h3 className='logo'>{heading}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="what is your name?"
          // value={profile.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <Form.Label>City</Form.Label>
        <Form.Control
          placeholder="What city do you live in?"
          // value={profile.city}
          name="city"
          onChange={handleChange}
        />
        <Form.Label>State</Form.Label>
        <Form.Control
          placeholder="What state do you live in?"
          // value={profile.state}
          name="state"
          onChange={handleChange}
        />
        <Form.Label>Zipcode</Form.Label>
        <Form.Control
          placeholder="What is your zipcode?"
          // value={profile.zipcode}
          name="zipcode"
          onChange={handleChange}
        />
        <Form.Label>Favorite Genres</Form.Label>
        <Form.Control
          placeholder="What are your favorite music genres?"
          // value={profile.genres}
          name="genres"
          onChange={handleChange}
        />
        <Form.Check
          label="Are you open to recommendations?"
          name="openToNewMusic"
          // defaultChecked={profile.openToNewMusic}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default ProfileForm
