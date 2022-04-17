import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebse.init";
import camra1 from '../../../Image/camera (1).png'

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = ()=>{
    signOut(auth);
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'> <img className="mb-1 me-2" src={camra1} alt="" /> Wedding Photography</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/checkout'>Checkout</Nav.Link>
              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              {
                user? 
                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Logout</button>
                :
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              }
              <Nav.Link as={Link} to='/signup'>SignUp</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
