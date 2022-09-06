import React, {useState, useEffect} from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/commomSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from '../assets/Data/products';
import ProductCard from '../components/UI/ProductCard/ProductCard';
import ReactPaginate from 'react-paginate';
import '../styles/foods.css';
import '../styles/pagination.css';

const Foods = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPagNumber] = useState(0);

    const searchedProduct = products.filter((item)=>{
        if (searchTerm.value === "") return item;
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.location.toLowerCase().includes(searchTerm.toLowerCase())) return item
       
    })


    const productPerPage = 8
    const visitedPage = pageNumber * productPerPage
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)

    const pageCount = Math.ceil(searchedProduct.length / productPerPage)

    const changePage = ({selected}) =>{
        setPagNumber(selected)
    }


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
                                 placeholder="Estou procurando por..."
                                 value={searchTerm}
                                 onChange={(e)=> setSearchTerm(e.target.value)}/>
                                <span><i class="ri-search-line"></i></span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-5">
                            <div className="sortingSearch text-end">
                                <select className="w-50">
                                    <option>Ordenar por</option>
                                    <option value="crescente">Alfabética, A-Z</option>
                                    <option value="decrescente">Alfabética, Z-A</option>
                                    {/* <option value=""></option>
                                    <option value=""></option> */}
                                </select>
                            </div>
                        </Col>

                        {displayPage
                        
                        .map((item) => ( 
                           <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                        <ProductCard item={item}/></Col>
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

export default Foods;