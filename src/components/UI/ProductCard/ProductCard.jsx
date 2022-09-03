import React from "react";
import productImg from '../../../assets/product_02.01.jpg'

const ProductCard = () => {
    return(
        <div className="productItem">
            <div className="productImg">
                <img src={productImg} alt="" />
            </div>

            <div className="productContent">
                <h5><Link >Hortifruit</Link></h5>
            </div>
            <div>
                <span>Novo Lar Supermercado</span>
                <span>R$ 25,00</span>
            </div>


        </div>
    )
}

export default ProductCard 