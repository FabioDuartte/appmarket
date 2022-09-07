import React from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commomSection/CommonSection';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import { FormGroup, Label, Input } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';



const RegisterProducts = () => {
    return <Helmet title='- Cadastrar Produtos'>
        <CommonSection title='Cadastrar Produtos' />
        <section>
            <Container>
                <Row>
                    <Col lg='12' md='12' sm='12' className="m-auto">
                        <Form>
                            <Form.Group className="mb-3" controlId="nomeEstabelecimento">
                                <Form.Label>Nome do estabelecimento</Form.Label>
                                <Form.Control type="text" placeholder="Digite o nome do estabelecimento" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="nomeProduto">
                                <Form.Label>Nome do produto</Form.Label>
                                <Form.Control type="password" placeholder="Digite o nome do produto" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="precoProduto">
                                <Form.Label>Preço por unidade</Form.Label>
                                <Form.Control type="text" placeholder="Digite o preço por unidade do produto" />
                            </Form.Group>

                            <Form.Select className="mb-3" aria-label="Categoria">
                                <option>Selecione uma categoria</option>
                                <option value="1">Hortifruit</option>
                                <option value="2">Carne</option>
                                <option value="3">Congelados</option>
                            </Form.Select>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Imagem do produto</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>

                            <Button className="w-100" variant="primary" type="submit" size="lg">
                                Cadastrar
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>

};

export default RegisterProducts;

