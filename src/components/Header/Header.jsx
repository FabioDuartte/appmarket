import React, {useRef} from "react";

import { Container } from "reactstrap"
import logo from '../../assets/logo.png'
import { NavLink, Link } from 'react-router-dom'


const navLinks = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Estoque',
        path: '/foods'
    },
    {
        display: 'Mercados',
        path: '/cart'
    },
    {
        display: 'Contact',
        path: '/contact'
    },
]

const Header = () => {
    const menuRef = useRef(null)
    const toggleMenu = () => menuRef.current.classList.toggle('showMenu')
    

    return (<header className="header">
        <Container>
            <div className="nav_wrapper d-flex align-items-center justify-content-between">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h5>MultiMarket</h5>
                </div>


                {/**********MENU**************/}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <div className="menu d-flex align-items-center gap-5">
                        {navLinks.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                className={(navClass)=>navClass.isActive ? "activeMenu" : ""}
                             >
                                
                                {item.display}
                    </NavLink>
                    ))}
                </div>
            </div>

            {/*********ÍCONES DE NAVEGAÇÃO****/}
            <div className="navRight d-flex align-items-center gap-4">
                {/* <span className="cartIcon">
                    <i class="ri-shopping-cart-line"></i>
                    <span className="cartItem">2</span>
                </span> */}

                <span className="user">
                    <Link to='/login'><i class="ri-user-line"></i></Link>
                </span>

                <span className="menuHamburguer" onClick={toggleMenu}>
                    <i class="ri-menu-line"></i>
                </span>
            </div>
        </div>
    </Container>
    </header >
    )
};

export default Header;