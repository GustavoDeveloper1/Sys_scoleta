import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
// import StyleNav from './navbar-styles';
export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <>

            <Navbar className="navbar" expand="md">
                <NavbarBrand className="logo" href="/">Scoleta</NavbarBrand>
                <NavbarToggler className="toggle" onClick={toggle} ><FaBars /></NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto menu" navbar>
                    <NavItem className="menu-item">
                            <NavLink href="#Header">Home</NavLink>
                        </NavItem>
                        <NavItem className="menu-item">
                            <NavLink href="/products">Nossos Produtos</NavLink>
                        </NavItem>
                        <NavItem className="menu-item">
                            <NavLink href="/Login">Preços</NavLink>
                        </NavItem>

                    </Nav>

                </Collapse>
            </Navbar>
        </>
    );
}
