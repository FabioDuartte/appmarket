import React, {useState} from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/commomSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from '../assets/Data/products';
import ProductCard from '../components/UI/ProductCard/ProductCard';
import ReactPaginate from 'react-paginate';
import '../styles/foods.css';
import '../styles/pagination.css';
import Service from '../service/ProductsService';
import { useEffect } from "react";


const Foods = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPagNumber] = useState(0);
    const [lista, setLista] = useState();
    const [products, setProducts] = useState([])

    const handleOrderClick = (e) => {
        console.log(e)
        const { value } = e.target;
        console.log(value)
        // let newList = [...lista];
        // newList.sort((a,d) => 
        //         (a.title > d.title) ?
        //         1 : (d.title > a.title) ?
        //         -1 : 0
        //     );
        // setLista(newList);
        // console.log(newList);

    }

    // const searchedProduct = products.filter((item)=>{
    //     if (searchTerm.value === "") return item;
    //     if (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.location.toLowerCase().includes(searchTerm.toLowerCase())) return item;
    // })

    // const productPerPage = 8
    // const visitedPage = pageNumber * productPerPage
    // const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)

    // const pageCount = Math.ceil(searchedProduct.length / productPerPage)

    const changePage = ({selected}) =>{
        setPagNumber(selected)
    }
   const fetchProducts = async () => {
        try {
            const pagination = {
                size: 5,
                orderby: "preco",
                direction: "ASC",
                page: 0 ,
                search: ""
            }
            const products = Service.getProducts(pagination);
            const data = await products;
            setProducts(data.data.data)
        } catch (error) {   
            console.log(error)    
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

 
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
                                    <option value="0" onSelect={handleOrderClick}>Alfabética, A-Z</option>
                                    <option value="1">Preço</option>
                                    {/* <option value=""></option>
                                    <option value=""></option> */}
                                </select>
                            </div>
                        </Col>
                        {products.map((product) => ( 
                           <Col lg="3" md="4" sm="6" xs="6" key={product.id} className="mb-4">
                            <ProductCard item={product}/></Col>
                        ))}
                        
                        {/* <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel= "Prev"
                                nextLabel= "Next"
                                containerClassName="paginationBttns"
                            />
                        </div> */}
                    </Row>
                </Container>
            </section>
        </Helmet>

    )
    
    
};

export default Foods;