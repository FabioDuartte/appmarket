import React, {useState} from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/commomSection/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";
import markets from '../assets/Data/markets';
import MarketCard from "../components/UI/marketCard/marketCard";
import '../styles/marketCard.css';
import '../styles/pagination.css';
import Service from '../service/MarketService';
import { useEffect } from "react";
import '../styles/paginationFM.css';



const Market = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);  
    const [markets, setMarkets] = useState([])  
    const [busca, setBusca] = useState("");
    const [isAbc, setIsAbc] = useState(false);
    const [itensNoTotal, setItensNoTotal] = useState(0);
    const [size, setSize] = useState(16);
    

    // const searchedProduct = markets.filter((item)=>{
    //     if (searchTerm.value === "") return item;
    //     if (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.adress.toLowerCase().includes(searchTerm.toLowerCase())) return item;
    // })

    const fetchMarkets = async () => {
        try {
            const pagination = {
                size: size,
                orderby: (isAbc) ? "preco" : "nome",
                direction: "ASC",
                page: pageNumber ,
                search: busca,
            }

            const markets = Service.getMarkets(pagination);
            const data = await markets;
            setMarkets(data.data.data)            
            setItensNoTotal(data.data.itensNoTotal)
            console.log(data.data.data)
            console.log(data.data.itensNoTotal)

        } catch (error) {   
            console.log(error)    
        }
    }

    useEffect(() => {
        fetchMarkets();
    }, [isAbc, pageNumber, itensNoTotal])

    return(
        <Helmet title=" - Produtos">
            <CommonSection title="Mercados"/>            
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className="searchBar d-flex align-items-center justify-content-between w-50">
                                <input
                                 type="text"
                                 placeholder="Estou procurando por..."
                                 value={busca}
                                 onChange={(e)=> setBusca(e.target.value)}/>           
                                 <span onClick={() => fetchMarkets(busca)}><i class="ri-search-line" ></i></span>
                                
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-5">
                            <div className="sortingSearch text-end">
                                <select className="w-50">
                                    <option>Ordenar por</option>                                    
                                </select>
                            </div>
                        </Col>

                        {markets.map((market) => ( 
                           <Col lg="3" md="4" sm="6" xs="6" key={market.id} className="mb-4">
                        <MarketCard item={market}/></Col>
                        ))}
                        
                        <div>
                            <div className="pagination">
                                {
                                (size >= itensNoTotal) ?
                                    null :                               
                                (pageNumber === 0) ?                                      
                                    <Button onClick={() => {setPageNumber(pageNumber+1) }}>Next</Button> : 
                                (pageNumber*size < itensNoTotal) ? 
                                    <div className="pagination">
                                        <Button onClick={() => {setPageNumber(pageNumber-1); }}>Prev</Button>
                                        <Button onClick={() => {setPageNumber(pageNumber+1); }}>Next</Button>                                                                            
                                    </div> : <Button onClick={() => {setPageNumber(pageNumber-1); }}>Prev</Button>
                                }                                                                
                            </div>                       
                        </div>                        
                    </Row>
                </Container>
            </section>
        </Helmet>

    )
    
    
};

export default Market;