import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import QZone from "./Shared/QZone";
import bg from '../assets/bg.png'
const RightNav = () => {
  return (
    <div>
      <h2>Login</h2>
      <Button variant='outline-primary'>
        <FaGoogle /> Login In Google
      </Button>{" "}
      <Button variant='outline-secondary'>
        <FaGithub /> Login
      </Button>{" "}
      <div>
        <h2>Find us on</h2>
        <ListGroup as='ul'>
          <ListGroup.Item as='li' >
            <FaFacebook/>Facebook
          </ListGroup.Item>
          <ListGroup.Item as='li'><FaTwitter/>Twitter</ListGroup.Item>
          <ListGroup.Item as='li'><FaInstagram/>Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div><img src={bg} alt="" /></div>
    </div>
  );
};

export default RightNav;
