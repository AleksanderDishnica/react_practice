import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigation from '../Navigation';
import { Container } from 'react-bootstrap';

export default function Register() {
    return (
        <>
            <Navigation />
            <Container>
                <Form className='w-50 m-auto'>
                    <h5>Registration form</h5>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}