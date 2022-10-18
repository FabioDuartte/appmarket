import React from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commomSection/CommonSection';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
// import { FormGroup, Label, Input } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import editMarket from '../assets/editMarket.png'
import editProduct from '../assets/editProduct.png'
import userImage from '../assets/userImage.png'
import '../styles/managerData.css';


const Manager = () => {
    return <Helmet title='-Editar Cadastrar Fornecedor'>
        <CommonSection title='Gerenciar' />
        <section>
            <Container className="d-flex align-items-center justify-content-center gap-3">
                {/* INICIO GERENCIAR MERCADOS */}
                <Row>
                    <Col lg="6" md="6" classNama=' '> 
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={editMarket} />
                            <Card.Body>
                                <Card.Title className="text-center">Gerenciar Mercados</Card.Title>
                                <Card.Text className="text-center">
                                    
                                </Card.Text>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <Button variant="success" className="w-50">Cadastrar</Button>
                                    <Button variant="primary" className="w-50">Editar</Button>
                                    <Button variant="danger" className="w-50">Deletar</Button>
                                </div>
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
                                <Card.Title className="text-center">Gerenciar Produtos</Card.Title>
                                <Card.Text className="text-center">
                                    
                                </Card.Text>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <Button variant="success" className="w-50">Cadastrar</Button>
                                    <Button variant="primary" className="w-50">Editar</Button>
                                    <Button variant="danger" className="w-50">Deletar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* FIM GERENCIAR PRODUTOS */}

                {/* INICIO GERENCIAR USUÁRIO */}
                <Row>
                    <Col lg="6" md="6" classNama=' '>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={userImage} />
                            <Card.Body>
                                <Card.Title className="text-center">Gerenciar Usuário</Card.Title>
                                <Card.Text className="text-center">
                                   
                                </Card.Text>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <Button variant="success" className="w-50">Cadastrar</Button>
                                    <Button variant="primary" className="w-50">Editar</Button>
                                    <Button variant="danger" className="w-50">Deletar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* FIM GERENCIAR USUÁRIO */}
            </Container>
        </section>
    </Helmet>
};

export default Manager;