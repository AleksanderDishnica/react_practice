import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import Navigation from './Navigation';

export default function EditYacht() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        length: 0,
        place: '',
        price: 0,
        new: false,
        img: ''
    });

    // Fetch data when the component is mounted or when 'id' changes
    useEffect(() => {
        const fetchItem = async () => {
            try {
                // Make the API call to fetch the yacht details
                const response = await axios.get(`http://127.0.0.1:3001/api/yacht/${id}`);

                // Check if the response data structure matches the expected formData structure
                const yachtData = response.data;

                // Set the formData with the fetched yacht data
                setFormData({
                    title: yachtData.title || '',
                    length: yachtData.length || 0,
                    place: yachtData.place || '',
                    price: yachtData.price || 0,
                    new: yachtData.new || false,
                    img: yachtData.img || ''
                });
            } catch (error) {
                console.error('Error fetching yacht data:', error);
                alert('Failed to fetch yacht data');
            }
        };
        fetchItem();
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://127.0.0.1:3001/api/yacht/${id}`, formData);
            alert('Yacht updated successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error updating yacht:', error);
            alert('Failed to update yacht');
        }
    };

    return (
        <>
            <Navigation />
            <Container>
                <Form className='w-50 m-auto' onSubmit={handleSubmit}>
                    <h5>Edit Yacht</h5>
                    <Form.Group className="mb-3" controlId="yacht_title">
                        <Form.Control
                            type="text"
                            placeholder="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="yacht_length">
                        <Form.Control
                            type="number"
                            placeholder="length"
                            name="length"
                            value={formData.length}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="yacht_place">
                        <Form.Control
                            type="text"
                            placeholder="place"
                            name="place"
                            value={formData.place}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="yacht_price">
                        <Form.Control
                            type="number"
                            placeholder="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="yacht_new">
                        <Form.Check
                            type="checkbox"
                            label="New addition"
                            name="new"
                            checked={formData.new}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="yacht_img">
                        <Form.Control
                            type="text"
                            placeholder="URL for the image of the yacht"
                            name="img"
                            value={formData.img}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}
