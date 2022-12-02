import React, { useEffect, useState } from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commomSection/CommonSection';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
// import { FormGroup, Label, Input } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import Excel from '../service/WorkSheet';
import {useNavigate} from "react-router-dom"; 
import NotFound from "./NotFound";


const RegisterProducts = () => {

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

    const navigate = useNavigate();

    const handleChange = async (e) => {
        const file = e.target.files[0]    
        const product = await Excel(file)
        
        console.log(product)
        navigate("/manegerProducts", {replace: true, state: product})
    }

  
    return (isValidSession) ? 
    <Helmet title='- Cadastrar Produtos'>
        <CommonSection title='Cadastrar Produtos' />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='12' sm='12' className="m-auto">
                        <form>                            
                            <Form.Group controlId="formFile" className="mb-3" >
                                <Form.Label>Importar arquivo do Excel</Form.Label>
                                <Form.Control type="file" id="file" accept=".xlsx, .xls" onChange={handleChange}/>
                                <small>Extensões suportadas: .xlsx e .xls</small>
                            </Form.Group>

                            <Button className="w-100" variant="primary" type="submit" size="lg" >
                                Cadastrar
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet> : <NotFound></NotFound>

};

export default RegisterProducts;

