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
import {Navigate, useNavigate, Link} from "react-router-dom"; 
import NotFound from "./NotFound";
import UserService from '../service/UserService';
import ProductService from '../service/ProductsService';
import Header from "../components/Header/Header";
import CategorieService from '../service/CategorieService';
import Swal from 'sweetalert2'
import closeCircleFill  from '../assets/closeCircleFill.png';
import edi2line from '../assets/edi2line.png';
import productImage from '../assets/productImagem.png'

const RegisterProducts = () => {
  
    const [isValidSession, setIsValidSession] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [itensNoTotal, setItensNoTotal] = useState(0);
    const [products, setProducts] = useState([])
    const [size, setSize] = useState(200);
    const [user, setUser] = useState({});
    const [message, setMessage] = useState("");
    const [productsToSave, setProductsToSave] = useState([]);
    const [excluir, setExcluir] = useState(false)

    const navigate = useNavigate();

    const fetchUser = async () => {
        const token = localStorage.getItem("key")  // Token do local storage
        const result = await UserService.verifyToken(token);
        setUser(result.data);
        setIsValidSession(!!result);
    }

    const handleChange = async (e) => {
        try {
            const file = e.target.files[0];
            const products = await Excel(file);
            setProducts(products);
            setItensNoTotal(products.length);
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubimit = async () => {
        try {
            const result = await CategorieService.getCategories();
            const categories = result.data.data;
            const marketId = user.market.id;
            const productsToSave = products.map(product => {
                return {
                    nome: product.nome,
                    preco: product.preco,
                    cesta: false,
                    categorieId: (categories.filter(category => category.nome === product.categoria))[0].id,
                    marketId: marketId
                }
            });
            if (productsToSave.length <= 0) {
                setMessage("Nenhum excel foi passado por favor informe a lista de produtos.");
                return;
            }
            console.log(productsToSave)
            await ProductService.saveProduct(productsToSave);
            setProducts([])
            setMessage("Produtos salvos com sucesso!");
        } catch (e) {
            console.log(e);
            setMessage("Erro ao salvar os produtos, corrija os dados e tente novamente.")
        }
    }

    const excluirMercado = (index, bool = false) => {
        console.log("excluir")
        if (bool) {
            
            Swal.fire({
                title: 'ATENÇÃO!',
                text: "Tem certeza que deseja excluir este item?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, excluir'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        const data = products.filter(product => product != products[index]);
                        setProducts(data);
                        Swal.fire(
                            'Item deletado!',
                            '',
                            'success'
                        )
                    } catch (error) {
                        console.log(error)
                    }
                }
            })
        }
    }

    useEffect(() => {
        fetchUser()
    }, [products])

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
                                products.map((product, index) => (
                                    <Col lg="3" md="4" sm="6" xs="6" key={product.id} className="mb-4">
                                        <div className="productItem">
                                            <div className="d-flex d-flex justify-content-end gap-4">
                                                <img src={edi2line} alt="" />
                                                <img src={closeCircleFill} alt="" onClick={() => excluirMercado(index, true)}/>
                                            </div>
                                            <div className="productImg">
                                                <img src={productImage} alt="Imagem" className="w-50" />
                                            </div>
                                            <div className="productContent ">
                                                <h5>{product.nome}</h5>
                                            </div>
                                            <div className="d-flex d-flex align-items-center justify-content-between">
                                                <span className="productPrice">R${product.preco}</span>
                                                
                                                <span className="productLocation">{user.market?.nome}</span>
                                            </div>
                                        </div>
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

