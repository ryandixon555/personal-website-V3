import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';

const MyNavBar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="/">Ryan Dixon</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="../portfolio">Portfolio</Nav.Link>
        <Nav.Link href="../skills">Skills</Nav.Link>
        <Nav.Link href="../qualifications">Qualifications</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
  
export default MyNavBar