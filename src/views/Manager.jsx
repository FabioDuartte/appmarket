import React, { useEffect, useState } from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commomSection/CommonSection';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import editMarket from '../assets/editMarket.png'
import editProduct from '../assets/editProduct.png'
import '../styles/managerData.css';
import UserService from "../service/UserService";
import NotFound from "./NotFound";

const Manager = () => {

    const result = { user: {
        authenticated: true,
        id: 1,
        email: "email@email.com",
        data: "2022-12-01T22:29:01.000Z",
        market: {
            id: 1,
            nome: "MultiMarket",
            cep: "11111222",
            cnpj: "123456789"
        }
    },
        token: "1978fd5e-d8ba-41dc-850e-a5ac786ce4f5"
    }

    const [isValidSession, setIsValidSession] = useState(false);
    const [user, setUser] = useState({})

    const fetchUser = async () => {           
        const token = localStorage.getItem("key")  // Token do local storage         
        // const result = await UserService.verifyToken(token);
        if (token === result.token){
            setUser(result)
            setIsValidSession(!!result);
        } else console.log("não funcionou")
    }

    useEffect( async () => {
        await fetchUser()
    }, [])

    return (isValidSession) ? 
        <Helmet title='-Editar Cadastrar Fornecedor'>
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
                                    <Link to="/manegerProducts"><Button variant="success" className="text-bold">Gerenciar Produtos</Button></Link>                                    
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* FIM GERENCIAR PRODUTOS */}             
                </Container>
            </section>
        </Helmet> :
        <NotFound></NotFound>

};

export default Manager;