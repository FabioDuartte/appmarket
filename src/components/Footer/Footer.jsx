import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from '../../assets/logo.jpg'
import '../../styles/footer.css'
import { Link } from "react-router-dom";


const Footer = () => {
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg="3" md="4" sm="6">
                    <div className="logo footerLogo text-start">
                        <img src={logo} alt="logo" />
                        <h5>MultiMarket</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Voluptatum, labore. Iure consequuntur, 
                         optio ratione id ad iusto.</p>
                    </div>
                </Col>

                <Col lg="3" md="4" sm="6">
                    <h5 className="footerTitle">Horário de entrega</h5>
                    <ListGroup className="deliveryTimeList">
                        <ListGroupItem className="deliveryTimeItem border-0 ps-0">
                            <span>Segunda - Sábado</span>
                            <p>08:00 - 22:00</p>
                        </ListGroupItem>

                        <ListGroupItem className="deliveryTimeItem border-0 ps-0">
                            <span>Domingos e feriados </span>
                            <p>Fechado</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg="3" md="4" sm="6">
                <h5 className="footerTitle">Entre em contato</h5>
                    <ListGroup className="deliveryTimeList">
                    <ListGroupItem className="deliveryTimeItem border-0 ps-0">
                            <p>Local: Nárnia</p>
                            <p>CEP - 41358-555</p>
                        </ListGroupItem>

                        <ListGroupItem className="deliveryTimeItem border-0 ps-0">
                            <span>Telefone: 71123-456</span>
                        </ListGroupItem>

                        <ListGroupItem className="deliveryTimeItem border-0 ps-0">
                            <span>Email: email@gmail.com </span>                           
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg="3" md="4" sm="6">
                <h5 className="footerTitle">Cadastre seu e-mail</h5>
                <p>receba promoções e novidades exclusivas</p>
                <div className="newsletter">
                    <input type="email" placeholder="Digite seu e-mail"/>
                    <span><i class="ri-mail-add-line"></i></span>
                </div>
                </Col>
            </Row>
            <Row>
            <Col lg="6" md="6">
                    <p></p>
                </Col>
                <Col lg="6" md="6">
                    <div className="socialMedia d-flex align-items-center gap-4 justify-content-end" >
                        <p>Nos siga nas redes sociais:</p>
                        <span><i class="ri-facebook-circle-fill"></i></span>
                        <span><i class="ri-twitter-fill"></i></span>
                        <span><i class="ri-instagram-fill"></i></span>                        
                    </div>
                </Col>
            </Row>
          
        </Container>

    </footer>

};

export default Footer;