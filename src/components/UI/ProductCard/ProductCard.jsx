import React from "react";
import productCard from '../../../styles/productCard.css'
import { Link } from 'react-router-dom';


const ProductCard = (props) => {
    const {id, title, image, price, location} = props.item;

    return(
        <div className="productItem">
            <div className="productImg">
                <Link to={`/food/${id}`}><img src={image} alt="Imagem" className="w-50" /></Link>
            </div>
            <div className="productContent ">
                <h5><Link to={`/food/${id}`}>{title}</Link></h5>
            </div>
            <div className="d-flex d-flex align-items-center justify-content-between">
                <span className="productPrice">R${price}</span>
                <span className="productLocation">{location}</span>
            </div>
        </div>
    )
}



export default ProductCard  