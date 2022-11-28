import React from "react";
import productCard from '../../../styles/productCard.css';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";
import closeCircleFill  from '../../../assets/closeCircleFill.png';
import edi2line  from '../../../assets/edi2line.png';
import Swal from 'sweetalert2'
import productImage from '../../../assets/productImagem.png'


const excluirMercado = () => {
    Swal.fire({
        title: 'ATENÇÃO!',
        text: "Tem certeza que deseja excluir este item?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, excluir'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Item deletado!',
            '',
            'success'
          )
        }
      })
}
//a


const ManegerProcuctItems = (props) => {
    const {id, nome, image, preco  , market} = props.item;

    return(
        
        <div className="productItem">
            <div className="d-flex d-flex justify-content-end gap-4">
                <img src={edi2line} alt="" />
                <img src={closeCircleFill} alt="" onClick={() => excluirMercado()}/>

            </div>
            <div className="productImg">
                <Link to={`/food/${id}`}><img src={productImage} alt="Imagem" className="w-50" /></Link>
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



export default ManegerProcuctItems  