import React, { useState } from 'react'
import '../../Styles/Header.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/assets/logo/logo.png'
const Header = () => {

    const [nav, setNav] = useState(false);

    // scroll Navbar
    const changevalueOnScroll = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 100 ? setNav(true) : setNav(false);
    }

    window.addEventListener("scroll", changevalueOnScroll)


    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to='/' className='logo'>
                                <img src={logo} alt='logo' className='img-fluid'></img>
                            </Link>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                                <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                <Nav.Link as={Link} to="/contact">contact</Nav.Link>
                                <Nav.Link as={Link} to="/">
                                    <div className='cart'>
                                        <i class="bi bi-bag fs-5"></i>
                                        <em className='roundpoint'>2</em>
                                    </div>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header