import React, {useState} from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/commomSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import markets from '../assets/Data/markets';
import MarketCard from "../components/UI/marketCard/marketCard";
import ReactPaginate from 'react-paginate';
import '../styles/marketCard.css';
import '../styles/pagination.css';

const Market = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPagNumber] = useState(0);

    const searchedProduct = markets.filter((item)=>{
        if (searchTerm.value === "") return item;
        if (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.adress.toLowerCase().includes(searchTerm.toLowerCase())) return item;
    })


    const productPerPage = 2
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
                        <MarketCard item={item}/></Col>
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

export default Market;