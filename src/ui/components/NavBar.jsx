
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { AuthContext } from '../../auth';


export const NavBar = () => {

    const { user, logout } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
        <Navbar collapseOnSelect sticky='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand as={ Link } to="/">HeroesApp</Navbar.Brand>
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link eventKey="1" as={ Link } to='/marvel' >Marvel</Nav.Link>
                        <Nav.Link eventKey="2" as={ Link } to='/dc' >DC</Nav.Link>
                        <Nav.Link eventKey="3" as={ Link } to='/search' >Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Nav className='d-flex justify-content-end'>
                    <Navbar.Text>{ user?.name } </Navbar.Text>
                    <Nav.Link onClick={ onLogout }> 
                        <i className="bi bi-box-arrow-right"></i> 
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}