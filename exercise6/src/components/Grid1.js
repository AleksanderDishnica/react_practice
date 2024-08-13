import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './grid.css'
import Nav1 from './Nav1';
import Footer from './Footer'

export default function Grid1() {
    return (
        <Container>
            <Nav1 />
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Col>1 of 4</Col>
                <Col>2 of 4</Col>
                <Col>3 of 4</Col>
                <Col>4 of 4</Col>
            </Row>
            <Footer />
        </Container>
    );
}