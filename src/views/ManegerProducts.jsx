import React, {useState} from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/commomSection/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";
import products from '../assets/Data/products';
import ManegerProcuctItems from '../components/UI/ManegerProductItems/manegerProductItems';
import ReactPaginate from 'react-paginate';
import '../styles/foods.css';
import '../styles/pagination.css';

const ManegerProducts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPagNumber] = useState(0);
    const [lista, setLista] = useState(products);

    const handleOrderClick = () => {

        let newList = [...lista];
        newList.sort((a,d) =>(a.title > d.title)?1:(d.title > a.title)?-1:0);
        setLista(newList);
        console.log(newList);

    }


    const searchedProduct = products.filter((item)=>{
        if (searchTerm.value === "") return item;
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.location.toLowerCase().includes(searchTerm.toLowerCase())) return item;
    })


    const productPerPage = 8
    const visitedPage = pageNumber * productPerPage
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)

    const pageCount = Math.ceil(searchedProduct.length / productPerPage)

    const changePage = ({selected}) =>{
        setPagNumber(selected)
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
                                 placeholder="Estou procurando por..."
                                 value={searchTerm}
                                 onChange={(e)=> setSearchTerm(e.target.value)}/>
                                <span><i class="ri-search-line"></i></span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-5 w">
                            <Button className="border:red">Cadastrar Produto</Button>
                        </Col>

                        {displayPage
                        
                        .map((lista) => ( 
                           <Col lg="3" md="4" sm="6" xs="6" key={lista.id} className="mb-4">
                        <ManegerProcuctItems item={lista}/></Col>
                        ))}
                        
                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel= "Prev"
                                nextLabel= "Next"
                                containerClassName="paginationBttns"
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>

    )
    
    
};

export default ManegerProducts;