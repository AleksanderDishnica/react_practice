import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './nav.css'

export default function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">React Router API exercise</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                    </Nav>
                </Navbar.Collapse>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </Container>
        </Navbar>
    )
}
