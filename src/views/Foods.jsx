import React, {useState, useCallback} from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/commomSection/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";
import products from '../assets/Data/products';
import ProductCard from '../components/UI/ProductCard/ProductCard';
import '../styles/foods.css';
import '../styles/pagination.css';
import Service from '../service/ProductsService';
import { useEffect } from "react";

import '../styles/paginationFM.css'



//id, nome, image, preco, market

const Foods = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // const [pageNumber, setPagNumber] = useState(0);
    const [lista, setLista] = useState();
    const [products, setProducts] = useState([])
    const [busca, setBusca] = useState("");  
    const [pageNumber, setPageNumber] = useState(0);  
    const [isPrice, setIsPrice] = useState(false);
    const [itensNoTotal, setItensNoTotal] = useState(0);
    const [size, setSize] = useState(16);

          

    const fetchProducts = async () => {
        const pagination = {
            size: size,
            orderby: (isPrice) ? "preco" : "nome",
            direction: "ASC",
            page: pageNumber,
            search: busca,
        }

        const products = Service.getProducts(pagination);
        const data = await products;
        setProducts(data.data.data)
        setItensNoTotal(data.data.itensNoTotal)
        console.log(data.data.data)
        console.log(data.data.itensNoTotal)
        
    }

    useEffect(() => {
        fetchProducts();
    }, [isPrice, pageNumber, itensNoTotal])

    return(
        <Helmet title=" - Produtos">
            <CommonSection title="Produtos"/>
            
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className="searchBar d-flex align-items-center justify-content-between w-50">
                                <input
                                 type="text"
                                 placeholder="Estou procurando por... "
                                 value={busca}                                 
                                 onChange={(e)=> setBusca(e.target.value)}/>
                                <span onClick={() => fetchProducts(busca)}><i class="ri-search-line" ></i></span>
                                {/* <button >Busca</button> */}
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-5">
                            <div className="sortingSearch text-end">
                                {(!isPrice) ? 
                                    <Button color="success" onClick={() => {setIsPrice(!isPrice); }}>Pesquisar por menor preço</Button> :
                                    <Button color="warning" onClick={() => {setIsPrice(!isPrice); }}>Pesquisaer por ordem alfabética</Button>
                                }                                                                
                            </div>
                        </Col>
                        {products.map((product) => ( 
                           <Col lg="3" md="4" sm="6" xs="6" key={product.id} className="mb-4">
                            <ProductCard item={product}/></Col>
                        ))}    
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

export default Foods;