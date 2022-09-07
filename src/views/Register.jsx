import React from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commomSection/CommonSection';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';



const Register = () => {
    return <Helmet title='- Cadastro'>
        <CommonSection title='Cadastro' />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className="m-auto">
                        <Form action="#" className=" ">
                            <FormGroup className="  ">
                                <Label for="exampleEmail" hidden>Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                            </FormGroup>
                            {' '}
                            <FormGroup>
                                <Label for="examplePassword" hidden>Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                            </FormGroup>
                            {' '}
                            <Button className="w-100" variant="outline-success" size="lg">Entrar</Button>
                        </Form>
                        <Button className="mt-3 w-100" variant="outline-danger" size="lg"><Link to='/register'>Criar uma conta</Link></Button>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>

};

export default Register;

