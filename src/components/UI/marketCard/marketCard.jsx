import React from "react";
import marketCard from '../../../styles/marketCard.css'
import marketImage from "../../../assets/PokeCenter.png"
import { Link } from 'react-router-dom';


const MarketCard = (props) => {
    const {id, nome, image, cep, cnpj} = props.item;

    return(
        <div className="productItem">
            <div className="productImg">
                <Link to={`/food/${id}`}><img src={marketImage} alt="Imagem" className="w-50" /></Link>
            </div>
            <div className="productContent ">
                <h5><Link to={`/food/${id}`}>{nome}</Link></h5>
            </div>            
        </div>
    )
}



export default MarketCard  