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
import UserService from '../service/UserService';
import Header from "../components/Header/Header";
import ManegerProcuctItems from '../components/UI/ManegerProductItems/manegerProductItems';
import CategorieService from '../service/CategorieService';

const RegisterProducts = () => {
  
    const [isValidSession, setIsValidSession] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [itensNoTotal, setItensNoTotal] = useState(0);
    const [products, setProducts] = useState([])
    const [size, setSize] = useState(200);
    const [user, setUser] = useState({})

    const fetchUser = async () => {
        const token = localStorage.getItem("key")  // Token do local storage
        const result = await UserService.verifyToken(token);
        setUser(result.data);
        setIsValidSession(!!result);
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const handleChange = async (e) => {
        const result = await CategorieService.getCategories();
        const categories = result.data.data;
        const file = e.target.files[0]
        const products = await Excel(file)
        
        console.log(user);
        setProducts(products)
        setItensNoTotal(products.length)
    }

    if (!isValidSession) return <NotFound />
    return (
    <Helmet title='- Cadastrar Produtos'>
        <Header />
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
                    
                    <section>
                        <Row>
                            {/* <Col lg="12" md="12" sm="6" className="mb-5 w">
                                <Button className="w-100" variant="primary" type="submit" size="lg">Cadastrar Produto</Button>
                            </Col> */}
                            
                            {(products) ?
                                products.map((product) => (
                                    <Col lg="3" md="4" sm="6" xs="6" key={product.id} className="mb-4">
                                    <ManegerProcuctItems item={product}/></Col>
                                )) :
                                <div>Não há produto cadastrado </div>
                            }


                            <div>
                                <div className="pagination">{
                                (size >= itensNoTotal) ?
                                    null :                               
                                (pageNumber === 0) ? 
                                                                    
                                    <Button onClick={() => {setPageNumber(pageNumber+1) }}>Próximo</Button> : 
                                (pageNumber*size < itensNoTotal) ? 
                                    
                                    <div className="pagination">
                                        <Button onClick={() => {setPageNumber(pageNumber-1); }}>Anterior</Button>
                                        <Button onClick={() => {setPageNumber(pageNumber+1); }}>Próximo</Button>
                                    </div> : <Button onClick={() => {setPageNumber(pageNumber-1); }}>Anterior</Button>
                                }
                                </div>                                                                
                            </div>
                        </Row>
                </section>
            </Container>
        </section>
    </Helmet> 
    )


};

export default RegisterProducts;

