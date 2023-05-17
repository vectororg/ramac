import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function TestPage() {
  return (
    <Container>
      <LinkContainer to="/">
        <Button>Back to main</Button>
      </LinkContainer>

      
    </Container>
  )
}
