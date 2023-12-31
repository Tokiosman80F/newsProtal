import { Button, Container } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import moment from "moment";
import Marquee from "react-fast-marquee";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    return (
      <Container >
        <div className='text-center'>
          <img src={logo} alt='' />
          <p className='text-secondary'>Journalism Without Fear or Favour</p>
          <h5>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h5>
        </div>
        <div className='d-flex bg-light p-3'>
          <Button variant='danger'>Latest</Button>
          <Marquee>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
        <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
          <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mx-auto'>
                <Nav.Link href='#features'>Home</Nav.Link>
                <Nav.Link href='#pricing'>About</Nav.Link>
                <Nav.Link href='#pricing'>Career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href='#memes'>
                  <Button variant='dark'>Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
}

export default Header