import React, {useState} from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/commomSection/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";
import ManegerProcuctItems from '../components/UI/ManegerProductItems/manegerProductItems';
import '../styles/foods.css';
import '../styles/pagination.css';
import '../styles/paginationFM.css';
import { useEffect } from "react";
import Service from '../service/ProductsService';
import {useLocation} from "react-router-dom"

const ManegerProducts = () => {
    const [searchTerm, setSearchTerm] = useState('');   
    const [pageNumber, setPageNumber] = useState(0); 
    const [isPrice, setIsPrice] = useState(false);
    const [itensNoTotal, setItensNoTotal] = useState(0);
    const [size, setSize] = useState(16);
    const [busca, setBusca] = useState("");
    const [products, setProducts] = useState([])
    

    const fetchManegerProducts = async () => {
        try {
            const pagination = {
                size: size,
                orderby: (isPrice) ? "preco" : "nome",
                direction: "ASC",
                page: pageNumber ,
                search: busca,
            }

            const markets = Service.getProducts(pagination);
            const data = await markets;
            setProducts(data.data.data)            
            setItensNoTotal(data.data.itensNoTotal)
            console.log(data.data.data)
            console.log(data.data.itensNoTotal)

        } catch (error) {   
            console.log(error)    
        }
    }
    
    useEffect(() => {        
        fetchManegerProducts();
    }, [isPrice, pageNumber, itensNoTotal])


    return(
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
        </Helmet>

    )
    
    
};

export default ManegerProducts;