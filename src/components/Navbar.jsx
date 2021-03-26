import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import logo from './Logos/8.png';
import './Navbar.css';


export function NavbarHeader() {
    return (
        <Navbar expand="lg bg-lg">
            <Navbar.Brand href="#home"><img className="logo" src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#link">Portfolio</Nav.Link>
                    <Nav.Link href="#home">About me</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}