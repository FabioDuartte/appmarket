import React from "react";
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/hero.png'
import '../styles/bannerHome.css'
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';


const Home = () => {
    return (<Helmet title=" - Home">
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="heroContent">
                            {/* <h4>O melhor jeito de fazer compras</h4>   */}
                            <h1 className="mb-3">Visite nossos mercados</h1>

                            <h4 className="mb-4 heroTitle"><span>Compare</span>, comprove e <span>economize!</span></h4>
 
                            <div className="heroBtns d-flex align-items-center gap-5">
                                <button className="orderBtn d-flex align-items-center justify-content-between">
                                    Faça seu pedido <i class="ri-arrow-right-s-line"></i>
                                </button>
                                <button className="allFoods-btn"><Link to='/foods'>Confira nossas promoções</Link></button>
                            </div>
                            <div className="heroService d-flex align-items-center gap-5 mt-5">
                                <p className="d-flex align-items-center gap-2"><span className="shippingIcon"><i class="ri-e-bike-2-line"></i></span>{""} Sem taxa de entrega!</p>
                                <p className="d-flex align-items-center gap-2"><span className="shippingIcon"><i class="ri-shield-check-line"></i></span>{""}Confiança garantida</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="heroImg">
                            <img src={heroImg} alt="Mulher no mercado" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
    )

};

export default Home;