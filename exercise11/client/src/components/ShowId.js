import React from 'react'
import { useParams } from 'react-router-dom';
import Nav1 from './Nav1';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ShowId() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let params = useParams();
    let navigate = useNavigate();

    console.log(params.id)

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/yacht/' + params.id)
            .then(response => {
                setInfo(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>There was an error fetching the yacht information.</p>;

    const goBack = () => {
        navigate(-1); // Go back to the previous page
    };

    console.log(info)

    return (
        <>
            <Nav1 />
            <Container>
                <Button onClick={goBack}>Go back</Button>
                <Row>
                    <Col lg={4} md={2} sm={1}>
                        <div>ID: {info.id}</div>
                        <h1>{info.title}</h1>
                        <h3>{info.length + 'ft'}</h3>
                        <Image src={info.img} />
                        <p>{info.place}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
