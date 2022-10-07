import React from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commomSection/CommonSection';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import { FormGroup, Label, Input } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';



const Login = () => {
    return <Helmet title='- login'>
        <CommonSection title='login' />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className="m-auto">
                        <Form action="#" className="form">
                            <FormGroup className="input">
                                <Label for="exampleEmail" hidden>Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                            </FormGroup>
                            {' '}
                            <FormGroup className="input">
                                <Label for="examplePassword" hidden>Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                            </FormGroup>
                            {' '}
                            <Button className="w-100" variant="outline-success" size="lg">Entrar</Button>
                            {/* <Button className="mt-3 w-100" variant="outline-danger" size="lg"><Link to='/register'>Criar uma conta</Link></Button> */}
                                                        
                            <Form.Group className="checkBox d-flex align-items center justify-content-between mt-4" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Manter-me logado" />
                                <Link to='/#'>Esqueci minha senha</Link>
                            </Form.Group>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>

};

export default Login;

