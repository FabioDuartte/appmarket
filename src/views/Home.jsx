import React from "react";
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/hero.png';
import '../styles/bannerHome.css';
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Category from "../components/UI/category/Category";


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
                                    Cestas Básicas <i class="ri-arrow-right-s-line"></i>
                                </button>
                                <button className="allFoods-btn"><Link to='/foods'>Confira nossas promoções</Link></button>
                            </div>
                            <div className="heroService d-flex align-items-center gap-5 mt-5">
                                {/* <p className="d-flex align-items-center gap-2"><span className="shippingIcon"><i class="ri-e-bike-2-line"></i></span>{""} Sem taxa de entrega!</p> */}
                                {/* <p className="d-flex align-items-center gap-2"><span className="shippingIcon"><i class="ri-shield-check-line"></i></span>{""}Confiança garantida</p> */}
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

        <section className="pt-0">
            <Category />
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h5 className="featureSubtilte mb-4">O que nós oferecemos?</h5>
                        <h2 className="featureTilte">Descubra em qual mercado o preço está mais em conta!</h2>
                        <h2 className="featureTilte"><span>Sem sair de casa</span></h2>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2>Os mais pedidos</h2>
                    </Col>
                    <Col lg='12'>
                        <div className="foodCategory d-flex align-items-center justify-content-center gap-5">
                            <button className="allBtn foodBtnActive">Listar todos</button>
                            <button className=" d-flex align-items-center gap-2">Hortifruit</button>
                            <button className=" d-flex align-items-center gap-2">Carnes</button>
                            <button className=" d-flex align-items-center gap-2">Padaria</button>
                            <button className=" d-flex align-items-center gap-2">Congelados</button>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    </Helmet>
    )
};

export default Home;