import React, { useEffect } from "react";
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
    const navigate = useNavigate();

    const handleChange = async (e) => {
        const file = e.target.files[0]    
        const product = await Excel(file)
        
        console.log(product)
        navigate("/manegerProducts", {replace: true, state: product})
    }

    // useEffect(() => {
    //     fetchUser();
    // }, [])

    return (true) ? 
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

