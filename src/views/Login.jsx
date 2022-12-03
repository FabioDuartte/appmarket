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
import {useNavigate} from "react-router-dom";
import Header from "../components/Header/Header";

const Login = () => {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }
      
    function handleChangePassword(e) {
        setPassword(e.target.value)
    }
   
    async function handleSubimit(e){
        try {
            const credentials = {email: email, senha:password}  
            const { data } = await UserService.autenticate( credentials)           
            const user = (data.user) ? data : null
            const token = data?.token;
            console.log(token, user);
            localStorage.setItem("key", token);
            localStorage.setItem("autenticated", true);
            if (user && token) {
                // TODO: Salvar token no local storage
                navigate("/manager", { replace: true });
            }
       } catch (error) {
            console.log(error.response.status)
            if (error.response.status >= 500) setMessage("Estamos com um problema no servidor, por favor, tente mais tarde.")
            if (error.response.status === 401) setMessage("Credenciais inválidas, tente novamente.")
       }
    }

    return (
        
    <Helmet title='- login'>
        <Header />
        <CommonSection title='login' />         
        <section>        
            <Container>
                <Row>
                    <div>
                        {message}
                    </div>
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
    )
};

export default Login;

