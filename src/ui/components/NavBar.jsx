
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { AuthContext } from '../../auth';


export const NavBar = () => {

    const { user, logout } = useContext( AuthContext );

    // const navigate = useNavigate();

    // const onLogout = () => {
    //     logout();
    //     navigate('/login', {
    //         replace: true
    //     });
    // }

    return (
        <Navbar collapseOnSelect sticky='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Brand href="/">HeroesApp</Navbar.Brand>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='marvel' >Marvel</Nav.Link>
                        <Nav.Link href='dc' >DC</Nav.Link>
                        <Nav.Link href='search' >Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Nav className='d-flex justify-content-end'>
                    <Navbar.Text>
                        { user?.name } 
                        <a href="/login" onClick={ logout } className='p-2' >
                            <i class="bi bi-box-arrow-right"></i>
                        </a>
                    </Navbar.Text>
                </Nav>
            </Container>
        </Navbar>
    )
}