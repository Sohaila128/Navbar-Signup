import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonPlusFill , BsFillPersonFill} from "react-icons/bs";
import { Navbar , Nav , Container } from 'react-bootstrap';

// ... other imports

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      {/* ... Navbar content ... */}
      <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      <Nav className="ms-auto">
        <Link to="/signup" className="nav-link">
          Sign Up <BsFillPersonPlusFill className="ms-2" />
        </Link>
        <Link to="/login" className="nav-link">
          Login <BsFillPersonFill className="ms-2" />
        </Link>
      </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
