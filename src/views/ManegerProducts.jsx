import React, {useState, useEffect} from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/commomSection/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";
import ManegerProcuctItems from '../components/UI/ManegerProductItems/manegerProductItems';
import '../styles/foods.css';
import '../styles/pagination.css';
import '../styles/paginationFM.css';
import Service from '../service/ProductsService';
import {useLocation} from "react-router-dom"
import NotFound from "./NotFound";

const ManegerProducts = () => {
    const [searchTerm, setSearchTerm] = useState('');   
    const [pageNumber, setPageNumber] = useState(0); 
    const [isPrice, setIsPrice] = useState(false);
    const [itensNoTotal, setItensNoTotal] = useState(0);
    const [size, setSize] = useState(16);
    const [busca, setBusca] = useState("");
    const [products, setProducts] = useState([])
    const [isValidSession, setIsValidSession] = useState(false);
    const [user, setUser] = useState({})

    const results = { user: {
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
    
    const result = { data : { data : 
            [
                {
                    "nome": "Salada mista",
                    "preco": 2,
                    "cesta": false,
                    "categorieId": 1,
                    "marketId": 1
                    
                },
                {
                    "nome": "Pera",
                    "preco": 2,
                    "cesta": false,
                    "categorieId": 1,
                    "marketId": 1
                },
                {
                    "nome": "crack",
                    "preco": 2,
                    "cesta": true,
                    "categorieId": 1,
                    "marketId": 1,
                }
            ]
    }
    }
    

    const fetchUser = async () => {           
        const token = localStorage.getItem("key")  // Token do local storage         
        // const results = await UserService.verifyToken(token);
        if (token === results.token){
            setUser(results)
            setIsValidSession(!!results);
        } else console.log("não funcionou")
        console.log("entrou")
    }

    const fetchManegerProducts = async () => {
        console.log("entrou2")
        try {
            const pagination = {
                size: size,
                orderby: (isPrice) ? "preco" : "nome",
                direction: "ASC",
                page: pageNumber ,
                search: busca,                
            }

            // const result = Service.getProducts(pagination);
            const data = result;
            setProducts(data.data.data)            
            setItensNoTotal(data.data.itensNoTotal)
            console.log(data.data.data)
            console.log(data.data.itensNoTotal)

        } catch (error) {   
            console.log(error)    
        }
    }
    
    useEffect(() => {        
        fetchUser();
    }, [])

    useEffect(() => {                       
       fetchManegerProducts() 
    }, [isPrice, pageNumber, itensNoTotal])


    return(isValidSession) ? 
        <Helmet title=" - Gerenciar Produtos">
            <CommonSection title="Gerenciar Produtos"/>          

            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className="searchBar d-flex align-items-center justify-content-between w-0">
                                <input
                                 type="text"
                                 placeholder="Estou procurando por... "
                                 value={busca}                                 
                                 onChange={(e)=> setBusca(e.target.value)}/>
                                <span onClick={() => fetchManegerProducts(busca)}><i class="ri-search-line" ></i></span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-5 w">
                            <Button className="border:red">Cadastrar Produto</Button>
                        </Col>
                        
                        {(products) ?
                            products.map((product) => ( 
                                <Col lg="3" md="4" sm="6" xs="6" key={product.id} className="mb-4">
                                <ManegerProcuctItems item={product}/></Col>
                            )) :
                            <div>Não há produto cadastrado </div>
                        }


                        <div>
                            <div className="pagination">                            {
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
                </Container>
            </section>
        </Helmet> : <NotFound></NotFound>
};

export default ManegerProducts;