import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:3001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Error: ' + result.error);
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            alert('An error occurred. Please try again.');
        }
    };


    return (
        <>
            <Navigation />
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2>Contact Us</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="message"
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
