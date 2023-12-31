import { Col, Container, Row } from "react-bootstrap"
import Footer from "../pages/Shared/Footer"
import Header from "../pages/Shared/Header"
import LeftNav from "../pages/LeftNav"
import RightNav from "../pages/RightNav"


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav></Col>
                    <Col lg={6}><h2>Main content</h2></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Main