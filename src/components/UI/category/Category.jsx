import React from "react";
import { Container, Row, Col } from 'reactstrap';

import categoryImg01 from "../../../assets/categoryImg01.png";
import categoryImg02 from "../../../assets/categoryImg02.png";
import categoryImg03 from "../../../assets/categoryImg03.png";
import categoryImg04 from "../../../assets/categoryImg04.png";

import '../../../styles/category.css'

const categoryData = [
    {
      display: "Hortifruti",
      imgUrl: categoryImg01,
    },
    {
      display: "Açougue",
      imgUrl: categoryImg02,
    },
    {
      display: "Padaria",
      imgUrl: categoryImg03,
    },
    {
      display: "Congelados",
      imgUrl: categoryImg04,
    },
    
  ]

const Category = () => {
    return <Container>
        <Row>
            {
                categoryData.map((item,index)=>(
                    <Col lg="3" md="4">
                        <div className="categoryItem d-flex align-items-center gap-2">
                            <div className="categoryImg">
                                <img src={item.imgUrl} alt="Itens das categorias"/>
                            </div>
                            <h6>{item.display}</h6>
                        </div>
                    </Col>
                    
                ))
            }
        </Row>
    </Container>
};

export default Category