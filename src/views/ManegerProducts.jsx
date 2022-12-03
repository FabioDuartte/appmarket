import React, {useState, useEffect} from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/commomSection/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";
import ManegerProcuctItems from '../components/UI/ManegerProductItems/manegerProductItems';
import '../styles/foods.css';
import '../styles/pagination.css';
import '../styles/paginationFM.css';
import Service from '../service/ProductsService';
import UserService from '../service/UserService';
import {useLocation} from "react-router-dom"
import NotFound from "./NotFound";
import Header from "../components/Header/Header";
import {useNavigate} from "react-router-dom";


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
    const navigate = useNavigate();

    
    
    const fetchUser = async () => { 
        try {
            console.log("entrou aqui")      
            const token = localStorage.getItem("key")  // Token do local storage         
            const result = await UserService.verifyToken(token);   
            setUser(result)
            setIsValidSession(true);
            console.log(result)
            console.log(token)
        } catch (error) {
            console.log(error)
        }    
       
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

            const result = Service.getProducts(pagination);
            const data = result;
            setProducts(data.data.data)
            setItensNoTotal(data.data.itensNoTotal)
            console.log(data.data.data)
            console.log(data.data.itensNoTotal)

        } catch (error) {
            console.log(error)
        }
    }

    
    useEffect(  () => {        
         fetchUser(); 
    }, [isValidSession])
    
    useEffect(  () => {       
         fetchManegerProducts ()                         
    }, [])

    if (!isValidSession) {
        return <NotFound/>
    }
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
}
export default ManegerProducts;