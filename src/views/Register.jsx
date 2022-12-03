import React from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commomSection/CommonSection';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import { FormGroup, Label, Input } from 'reactstrap';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import Header from "../components/Header/Header";
import Form from 'react-bootstrap/Form';



const Register = () => {
    return <Helmet title='- Criar Uma Conta'>        
        <CommonSection title='Criar Uma Conta' />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className="m-auto w-100">
                        <Form action="#" className=" ">
                            <FormGroup>
                                <Form.Label for="email" hidden>Email</Form.Label>
                                <Input type="email" name="email" id="Email" placeholder="Email" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="senha" hidden>Password</Label>
                                <Input type="password" name="password" id="Password" placeholder="Senha" />
                            </FormGroup>

                            <FormGroup>
                                <Form.Label for="confirmaSenha" hidden>Password</Form.Label>
                                <Input type="password" name="password" id="confirmPassword" placeholder="Confirmar senha" />
                            </FormGroup>

                            <Form.Group className="mb-3" controlId="nomeEstabelecimento">
                                <Form.Label>Nome do estabelecimento</Form.Label>
                                <Form.Control  type="text" placeholder="Digite o nome do estabelecimento" />
                            </Form.Group>

                            <Form.Group controlId="cep" className="mb-3">
                                <Form.Label>CEP</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu CEP" />
                            </Form.Group>

                            <Form.Group controlId="cnpj" className="mb-3">
                                <Form.Label>CNPJ</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu CNPJ" />
                            </Form.Group>

                            <Button className="mt-3 w-100" variant="outline-danger" size="lg"><Link to='/register'>Criar uma conta</Link></Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>

};

export default Register;

