import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';

import edit from './svg/edit.svg'
import deleting from './svg/deleting.svg'

export default function Yachts() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let admin = true

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/yachts')
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
    if (error) return <p>There was an error fetching yachts.</p>;

    return (
        <div>
            <Row>
                <h1>Yachts for rent</h1>
                <p>
                    Select the yacht you prefer and enjoy an amazing journey into the blue ocean.<br />
                    We help personalize your trip.
                </p>
                {info.map((data, index) => {
                    return (
                        <Col key={index} lg={4} md={2} sm={1}>
                            <Link to={'/' + data.id} className='p-0'>
                                <section className='contain'>
                                    <Image className='w-100' src={data.img} to={data.id} />
                                </section>
                                <h3>{data.title}</h3>
                                <section>
                                    Lorem ipsum dolor sit amet, consectetur amonis adipisicing elit. Nisi velit quas doloremque placeat libero ut?
                                    <br />{data.new ? <><Badge pill bg="primary">Just arrived</Badge><br /></> : null}
                                </section>
                            </Link>
                            <p className="btn-group" role="group">
                                {admin ? <Link to={"/yacht/edit/" + data.id} className='p-0 inline'>
                                    <Button variant='info' className=''>
                                        Edit
                                    </Button>
                                </Link> : ''}
                                {admin ? <Link to={"/yacht/delete/" + data.id} className='p-0 inline'>
                                    <Button variant='danger'>
                                        Delete
                                    </Button>
                                </Link> : ''}
                            </p>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
