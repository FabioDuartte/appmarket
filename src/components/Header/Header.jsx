import React, { useRef } from "react";

// import { Container } from "reactstrap"
import logo from '../../assets/logo.png'
import { NavLink, Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col, Button } from 'reactstrap';




const navLinks = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Estoque',
        path: '/foods'
    },
    {
        display: 'Mercados',
        path: '/market'
    },
    {
        display: 'Cadastrar Produtos',
        path: '/registerProducts'
    },
]

const Header = () => {
    const menuRef = useRef(null)
    const toggleMenu = () => menuRef.current.classList.toggle('showMenu')


    return (<header className="header">
        <Container>
            <div className="nav_wrapper d-flex align-items-center justify-content-between">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h5>MultiMarket</h5>
                </div>


                {/**********MENU**************/}
                
                <div>
                    <Row>
                        <Col lg='12' md='12' className="d-flex align-items-center justify-content-between gap-5">
                            <Link to='/home'><Button outline color="primary" size="md" className="">Home</Button></Link>
                            <Link to='/foods'><Button outline color="success" size="md">Produtos</Button></Link>
                            <Link to='market'><Button outline color="danger" size="md">Mercados</Button></Link>
                        </Col>
                    </Row>
                </div>
                {/* <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <div className="menu d-flex align-items-center gap-5 color">
                        {navLinks.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                className={(navClass) => navClass.isActive ? "activeMenu" : ""}
                            >
                                {item.display}
                            </NavLink>
                        ))}
                    </div>
                </div> */}

                {/*********ÍCONES DE NAVEGAÇÃO****/}
                <div className="navRight d-flex align-items-center gap-4">
                    {/* <span className="cartIcon">
                    <i class="ri-shopping-cart-line"></i>
                    <span className="cartItem">2</span>
                </span> */}

                    <span className="user">
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                <Link to='/login'><i class="ri-user-line"></i></Link>
                            </Dropdown.Toggle>

                            <Dropdown.Menu open>
                                <Dropdown.Item href="/login">Login</Dropdown.Item>
                                <Dropdown.Item href="/registerProducts">Cadastrar Produtos</Dropdown.Item>
                                <Dropdown.Item href="/manager">Gerenciar</Dropdown.Item>
                                <Dropdown.Divider />                    
                                <Dropdown.Item href="#/action-2">Sair</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>

                    <span className="menuHamburguer" onClick={toggleMenu}>
                        <i class="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </Container>
    </header >
    )
};

export default Header;