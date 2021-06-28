import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

function navbar() {
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="Home">Eltek Charger</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="Dashboard">Dashboard</Nav.Link>
          <Nav.Link href="Config">Config</Nav.Link>
        </Nav>
      </Navbar>
    </>
    )
}

export default navbar
