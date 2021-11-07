import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

import {Link} from 'react-router-dom';


export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <>

            <Navbar className="navbar" expand="md">
                <NavbarBrand className="logo" to="/">Scoleta</NavbarBrand>
                <NavbarToggler className="toggle" onClick={toggle} ><FaBars /></NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto menu" navbar>
                    <NavItem className="menu-item">
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem className="menu-item">
                            <Link to="/point">Nossos Produtos</Link>
                        </NavItem>
                        <NavItem className="menu-item">
                            <Link to="./">Login</Link>
                        </NavItem>

                    </Nav>

                </Collapse>
            </Navbar>
        </>
    );
}
