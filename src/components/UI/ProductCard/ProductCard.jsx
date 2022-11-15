import React from "react";
import productCard from '../../../styles/productCard.css';
import { Link } from 'react-router-dom';


const ProductCard = (props) => {
    const {id, nome, image, preco, market} = props.item;

    return(
        <div className="productItem">
            <div className="productImg">
                <Link to={`/food/${id}`}><img src={image} alt="Imagem" className="w-50" /></Link>
            </div>
            <div className="productContent ">
                <h5><Link to={`/food/${id}`}>{nome}</Link></h5>
            </div>
            <div className="d-flex d-flex align-items-center justify-content-between">
                <span className="productPrice">R${preco}</span>
                <span className="productLocation">{market?.nome}</span>
            </div>
        </div>
    )
}



export default ProductCard  