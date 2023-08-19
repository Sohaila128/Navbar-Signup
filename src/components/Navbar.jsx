import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonPlusFill , BsFillPersonFill} from "react-icons/bs";
import { Navbar , Nav , Container } from 'react-bootstrap';

// ... other imports

function NavBar() {
  return (
    <Navbar expand="lg" className="text-white navbar">
      {/* ... Navbar content ... */}
      <Container>
       <Link to="/"><Navbar.Brand href="#home" className='text-white'>Assignment 1</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      <Nav className="ms-auto">
        <Link to="/signup" className="nav-link text-white">
          Sign Up <BsFillPersonPlusFill className="ms-2" />
        </Link>
        <Link to="/login" className="nav-link text-white">
          Login <BsFillPersonFill className="ms-2" />
        </Link>
      </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
