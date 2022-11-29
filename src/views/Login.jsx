import React from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commomSection/CommonSection';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import { FormGroup, Label, Input } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import UserService from "../service/UserService"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }
      
    function handleChangePassword(e) {
        setPassword(e.target.value)
    }
      
    async function handleSubimit(e){
        const { data } = await UserService.autenticate(email, password)
        const user = (data.data) ? data.data : null 
        console.log(user)
       
        if (user != null ) {
            //TODO: adicionar valor do user a uma state global 
            //TODO: redirecionar para a pag de gerencia com as opções de usario logado  
            window.location.href = "http://localhost:3000/home"
        
        }
        else {      
            //TODO: retornar para a pag de login.
            window.location.href = "http://localhost:3000/login"
            //TODO limpar a variaveis de email, senha.
            email = null;
            password = null;
             //TODO mensg de erro
            alert("Email ou senha incorreto\Caso esqueceu email ou senha click em Esqueci a senha");

       
        }
        
        


    }
  
   

    return <Helmet title='- login'>
        <CommonSection title='login' />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className="m-auto">
                        <Form action="#" className="form">
                            <FormGroup className="input">
                                <Label for="exampleEmail" hidden>Email</Label>
                                <Input onChange={handleChangeEmail} value={email}type="email" name="email" id="exampleEmail" placeholder="Email" />
                            </FormGroup>
                            {' '}
                            <FormGroup className="input">
                                <Label for="examplePassword" hidden>Password</Label>
                                <Input onChange={handleChangePassword} value={password} type="password" name="password" id="examplePassword" placeholder="Password" />
                            </FormGroup>
                            {' '}
                            <Button onClick={ handleSubimit } className="w-100" variant="outline-success" size="lg">Entrar</Button>
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

