import React, { useEffect, useState } from "react";
// import {useNavigate} from "react-router-dom";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commomSection/CommonSection';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import editMarket from '../assets/editMarket.png'
import editProduct from '../assets/editProduct.png'
import '../styles/managerData.css';
import UserService from "../service/UserService";
import NotFound from "./NotFound";
import Header from "../components/Header/Header";


const Manager = () => { 

    const [isValidSession, setIsValidSession] = useState(false);    
    const [user, setUser] = useState({})
    // const navigate = useNavigate();

    const fetchUser = async () => {           
        const token = localStorage.getItem("key")  // Token do local storage         
        const result = await UserService.verifyToken(token);
        setUser(result.data)
        setIsValidSession(!!result);
    }

    useEffect(() => {
        fetchUser()
        console.log(isValidSession)
    }, [])

    return (isValidSession) ? 
        <Helmet title='-Editar Cadastrar Fornecedor'>
            <Header isValid={isValidSession} />
            <CommonSection title='Gerenciar' />
            <section>
                <Container className="d-flex align-items-center justify-content-center gap-3">
                    {/* INICIO GERENCIAR MERCADOS */}
                    <Row>
                        <Col lg="6" md="6" classNama=' '> 
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={editMarket} />
                                <Card.Body>                              
                                    <Card.Text className="text-center"> 
                                    <Link to="/manegerMarket"><Button variant="success" className="text-weight-bold">Gerenciar Mercados</Button></Link>   
                                    </Card.Text>                             
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* FIM GERENCIAR MERCADOS */}

                    {/* INICIOGERENCIAR PRODUTOS */}
                    <Row>
                        <Col lg="6" md="6" classNama=' '>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={editProduct} />
                                <Card.Body>                                
                                    <Card.Text className="text-center">                                    
                                    <Link to="/manegerProducts"> <Button variant="success" className="text-bold">Gerenciar Produtos</Button></Link>                                    
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* FIM GERENCIAR PRODUTOS */}             
                </Container>
            </section>
        </Helmet> :
        null

};

export default Manager;