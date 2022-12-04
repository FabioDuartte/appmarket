import React, { useRef, useEffect, useState } from "react";
// import { Container } from "reactstrap"
import logo from '../../assets/logo.png'
import { NavLink, Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col, Button } from 'reactstrap';
import UserService from "../../service/UserService";
import {useNavigate} from "react-router-dom";

// const navLinks = [
//     {
//         display: 'Home',
//         path: '/home'
//     },
//     {
//         display: 'Estoque',
//         path: '/foods'
//     },
//     {
//         display: 'Mercados',
//         path: '/market'
//     },
//     {
//         display: 'Cadastrar Produtos',
//         path: '/registerProducts'
//     },
// ]

const Header = (prop) => {
   
    const [autenticated, setAutenticated] = useState(false);
    const navigate = useNavigate();

    const isLogged = () => { 
        const check = localStorage.getItem("autenticated")
        if(check === "true") {
            setAutenticated(true)
        }
    }
    
    const logout = async () => {
        try {
            const token = localStorage.getItem("key");
            const _ = await UserService.logout(token);
            localStorage.removeItem("autenticated");
            localStorage.removeItem("key");
            navigate("/home", { replace: true });
        } catch (error) {            
            localStorage.removeItem("autenticated");
            localStorage.removeItem("key");
            navigate("/home", { replace: true });
        }
        
    }

   
    useEffect( () => {
        isLogged();       
    }, [autenticated])

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
                            <Link to='../home'><Button outline color="primary" size="md" className="">Home</Button></Link>
                            <Link to='../foods'><Button outline color="success" size="md">Produtos</Button></Link>
                            <Link to='../market'><Button outline color="danger" size="md">Mercados</Button></Link>
                        </Col>
                    </Row>
                </div>
                {/*********ÍCONES DE NAVEGAÇÃO****/}
                <div className="navRight d-flex align-items-center gap-4">
                    <span className="user">
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                <i class="ri-user-line"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu open>
                                {(autenticated) ?                                
                                    <>
                                                                     
                                        <Dropdown.Item href="/registerProducts">Cadastrar Produtos</Dropdown.Item>                                        
                                        <Dropdown.Item href="/manager">Gerenciar</Dropdown.Item>
                                        <Dropdown.Divider />                    
                                        <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
                                    </> : 
                                    <>
                                        <Dropdown.Item href="/login">Login</Dropdown.Item>
                                        <Dropdown.Item href="/register">Criar uma Conta</Dropdown.Item>
                                    </>
                                } 
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>                  
                </div>
            </div>
        </Container>
    </header >
    )
};

export default Header;