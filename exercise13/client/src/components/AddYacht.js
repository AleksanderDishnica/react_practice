import React from 'react'
import Navigation from './Navigation'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function AddYacht() {
    const [formData, setFormData] = useState({
        title: '',
        length: 0,
        place: '',
        price: 0,
        new: false,
        img: ''
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
            const response = await axios.post('http://127.0.0.1:3001/api/insertYacht', formData);
            alert('Yacht added successfully!');
            // Clear the form
            setFormData({
                title: '',
                length: 0,
                place: '',
                price: 0,
                new: false,
                img: ''
            });
        } catch (error) {
            console.error('There was an error adding the yacht!', error);
            alert('Failed to add yacht.');
        }
    };

    return (
        <>
            <Navigation />
            <Container>
                <Form className='w-50 m-auto' onSubmit={handleSubmit}>
                    <h5>Add Yacht</h5>
                    <Form.Group className="mb-3" controlId="yacht_title">
                        <Form.Control type="text" placeholder="title" name="title" value={formData.title} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="yacht_length">
                        <Form.Control type="number" placeholder="length" name="length" value={formData.length} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="yacht_place">
                        <Form.Control type="text" placeholder="place" name="place" value={formData.place} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="yacht_price">
                        <Form.Control type="number" placeholder="price" name="price" value={formData.price} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="yacht_new">
                        <Form.Check type="checkbox" label="New addition" name="new" value={formData.new} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="yacht_img">
                        <Form.Control type="text" placeholder="URL for the image of the yacht" name="img" value={formData.img} onChange={handleChange} required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}
