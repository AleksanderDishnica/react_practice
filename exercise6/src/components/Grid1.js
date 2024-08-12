import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'grid.css'

export default function Grid1() {
    return (
        <Container>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>);
}