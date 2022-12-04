import React, {useState, useEffect} from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/commomSection/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";
import ManegerProcuctItems from '../components/UI/ManegerProductItems/manegerProductItems';
import '../styles/foods.css';
import '../styles/pagination.css';
import '../styles/paginationFM.css';
import Service from '../service/MarketService';
import UserService from '../service/UserService';
import {useLocation, Link} from "react-router-dom"
import NotFound from "./NotFound";
import Header from "../components/Header/Header";
import {useNavigate} from "react-router-dom";


const ManegerProducts = () => {
    const [pageNumber, setPageNumber] = useState(0); 
    const [itensNoTotal, setItensNoTotal] = useState(0);
    const [size, setSize] = useState(16);
    const [busca, setBusca] = useState("");
    const [products, setProducts] = useState([])
    const [productsFilter, setProductsFilter] = useState([])
    const [filter, setFilter] = useState(false)
    const [isValidSession, setIsValidSession] = useState(false);
    const [user, setUser] = useState({})
    
    const fetchUser = async () => {
        try {
            console.log("entrou aqui")
            const token = localStorage.getItem("key")  // Token do local storage
            const result = await UserService.verifyToken(token);
            setUser(result.data);
            setIsValidSession(true);
            return result
        } catch (error) {
            console.log(error)
        }
    }

    const fetchManegerProductsbyMarket = async () => {
        console.log("entrou2")
        try {
            console.log(user.market.id)
            const result = await Service.getMarketsById(user.market.id);
            setProducts(result.data.data.products)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchProductsbyName = () => {
        const productsFilter = products.filter(product => product.nome.includes(busca));
        setProductsFilter(productsFilter);
        setFilter(true);
    }
    
    useEffect(  () => {        
         fetchUser(); 
    }, [isValidSession])
    
    useEffect(() => {
        fetchManegerProductsbyMarket()
    }, [user])

    if (!isValidSession) {
        return null
    }
    return(
        <Helmet title=" - Gerenciar Produtos">
           
            <Header />
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
                                <span onClick={() => fetchProductsbyName(busca)}><i class="ri-search-line" ></i></span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-5 w">
                            <Link to="/registerProducts"><Button className="border:red">Cadastrar Produto</Button></Link>
                        </Col>
                        
                        {
                        (filter) ?
                        productsFilter.map((product) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={product.id} className="mb-4">
                                <ManegerProcuctItems item={product} />
                            </Col>
                        )) :
                        (products) ?
                            products.map((product) => (
                                <Col lg="3" md="4" sm="6" xs="6" key={product.id} className="mb-4">
                                    <ManegerProcuctItems item={product}/>
                                </Col>
                            )) :
                            <div>Não há produto cadastrado </div>
                        }

                        <div>
                            <div className="pagination"> 
                            {
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
}
export default ManegerProducts;