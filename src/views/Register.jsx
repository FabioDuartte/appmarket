import React from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commomSection/CommonSection';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import { FormGroup, Label, Input } from 'reactstrap';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';



const Register = () => {
    return <Helmet title='- Cadastro'>
        <CommonSection title='Cadastro' />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className="m-auto w-100">
                        <Form action="#" className=" ">
                            <FormGroup>
                                <Form.Label for="email" hidden>Email</Form.Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="senha" hidden>Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Senha" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="confirmaSenha" hidden>Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Confirmar senha" />
                            </FormGroup>

                            <div className="mb-3 d-flex align-items center mt-4">
                                <Form.Check inline label="Sou um cliente" name="group1" type="radio" />
                                <Form.Check inline label="Sou um fornecedor" name="group1" type="radio" />
                            </div>

                            <Form.Group className="mb-3" controlId="nomeEstabelecimento">
                                <Form.Label>Nome do estabelecimento</Form.Label>
                                <Form.Control disabled type="text" placeholder="Digite o nome do estabelecimento" />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Imagem do estabelecimento</Form.Label>
                                <Form.Control disabled type="file" />
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

