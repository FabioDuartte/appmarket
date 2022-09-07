import React from "react";
import marketCard from '../../../styles/marketCard.css'
import { Link } from 'react-router-dom';


const MarketCard = (props) => {
    const {id, name, image, adress} = props.item;

    return(
        <div className="productItem">
            <div className="productImg">
                <Link to={`/food/${id}`}><img src={image} alt="Imagem" className="w-50" /></Link>
            </div>
            <div className="productContent ">
                <h5><Link to={`/food/${id}`}>{name}</Link></h5>
            </div>            
        </div>
    )
}



export default MarketCard  