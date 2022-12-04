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
import {Navigate, useNavigate} from "react-router-dom"; 
import NotFound from "./NotFound";
import UserService from '../service/UserService';
import ProductService from '../service/ProductsService';
import Header from "../components/Header/Header";
import ManegerProcuctItems from '../components/UI/ManegerProductItems/manegerProductItems';
import CategorieService from '../service/CategorieService';

const RegisterProducts = () => {
  
    const [isValidSession, setIsValidSession] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [itensNoTotal, setItensNoTotal] = useState(0);
    const [products, setProducts] = useState([])
    const [size, setSize] = useState(200);
    const [user, setUser] = useState({});
    const [message, setMessage] = useState("");
    const [productsToSave, setProductsToSave] = useState([]);

    const navigate = useNavigate();

    const fetchUser = async () => {
        const token = localStorage.getItem("key")  // Token do local storage
        const result = await UserService.verifyToken(token);
        setUser(result.data);
        setIsValidSession(!!result);
    }

    const handleChange = async (e) => {
        try {
            const result = await CategorieService.getCategories();
            const categories = result.data.data;
            const marketId = user.market.id;
            const file = e.target.files[0];
            const products = await Excel(file);
            const productsToSave = products.map(product => {
                return {
                    nome: product.nome,
                    preco: product.preco,
                    cesta: false,
                    categorieId: (categories.filter(category => category.nome === product.categoria))[0].id,
                    marketId: marketId
                }
            });
            setProductsToSave(productsToSave);
            setProducts(products);
            setItensNoTotal(products.length);
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubimit = async () => {
        try {
            console.log(productsToSave)
            if (productsToSave.length <= 0) {
                setMessage("Nenhum excel foi passado por favor informe a lista de produtos.");
                return;
            }
            const products = await ProductService.saveProduct(productsToSave);
            setProductsToSave([])
            setProducts([])
            setMessage("Produtos salvos com sucesso!");
            // navigate("/manegerProducts", { replace: true });
        } catch (e) {
            console.log(e);
            setMessage("Erro ao salvar os produtos, corrija os dados e tente novamente.")
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    if (!isValidSession) return null
    return (
    <Helmet title='- Cadastrar Produtos'>
        <Header />
        <CommonSection title='Cadastrar Produtos' />
            <section>
                <Container>
                    <div>
                        {message}
                    </div>
                    
                    <Row>
                        <Col lg='6' md='12' sm='12' className="m-auto">
                            <form>                            
                                <Form.Group controlId="formFile" className="mb-3" >
                                    <Form.Label>Importar arquivo do Excel</Form.Label>
                                    <Form.Control type="file" id="file" accept=".xlsx, .xls" onChange={handleChange}/>
                                    <small>Extensões suportadas: .xlsx e .xls</small>
                                </Form.Group>
                                <Button onClick={handleSubimit} className="w-100" variant="primary"   size="lg" >Cadastrar</Button>
                            </form>
                        </Col>
                    </Row>
                    <section>
                        <Row>
                            {(products) ?
                                products.map((product) => (
                                    <Col lg="3" md="4" sm="6" xs="6" key={product.id} className="mb-4">
                                        <ManegerProcuctItems item={product}/>
                                    </Col>
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

