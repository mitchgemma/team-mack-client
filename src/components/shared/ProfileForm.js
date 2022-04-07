import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ProfileForm = (props) => {
  const { profile, handleChange, handleSubmit, heading } = props

  return (
    <Container className="justify-content-center">
      <h3>{heading}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="what is your name?"
          value={profile.name}
          name="name"
          onChange={handleChange}
        />
        <Form.Label>City</Form.Label>
        <Form.Control
          placeholder="What city do you live in?"
          value={profile.city}
          name="city"
          onChange={handleChange}
        />
        <Form.Label>State</Form.Label>
        <Form.Control
          placeholder="What state do you live in?"
          value={profile.state}
          type="number"
          name="age"
          onChange={handleChange}
        />
        <Form.Check
          label="Are you open to recommendations?"
          name="openToNewMusic"
          defaultChecked={profile.openToNewMusic}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default ProfileForm
