import React from "react";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commomSection/CommonSection';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import { FormGroup, Label, Input } from 'reactstrap';
import '../styles/login.css';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'

const salvarAlteracoes = () => {
Swal.fire({
    title: '',
    text: 'Alterações feitas com sucesso',
    icon: 'success',
    confirmButtonText: 'Fechar'
  })
}

const excluirMercado = () => {
    Swal.fire({
        title: 'ATENÇÃO!',
        text: "Tem certeza que deseja excluir este mercado?",
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

const ManegerMarket = () => {
    return <Helmet title='- Gerenciar Mercados'>
        <CommonSection title='Gerenciar Mercados' />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className="m-auto w-100">
                        <Form action="#" className=" ">
                            <FormGroup>
                                <Form.Label for="email">Alterar Email</Form.Label>
                                <Input type="email" name="email" id="Email" placeholder="Email" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="senha">Alterar Senha</Label>
                                <Input type="password" name="password" id="Password" placeholder="Cadastrar nova Senha" />
                            </FormGroup>

                            <FormGroup>
                                <Form.Label for="confirmaSenha" >Confirmar nova senha</Form.Label>
                                <Input type="password" name="password" id="confirmPassword" placeholder="Confirme a senha" />
                            </FormGroup>

                            <Form.Group className="mb-3" controlId="nomeEstabelecimento">
                                <Form.Label>Alterar Nome do estabelecimento</Form.Label>
                                <Form.Control  type="text" placeholder="Digite o nome do estabelecimento" />
                            </Form.Group>

                            <Form.Group controlId="cep" className="mb-3">
                                <Form.Label>Novo CEP</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu CEP" />
                            </Form.Group>

                            <Form.Group controlId="cnpj" className="mb-3">
                                <Form.Label>CNPJ</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu CNPJ" />
                            </Form.Group>
                            <div className="d-flex justify-content-between gap-5">                                
                                <Button className="mt-3 w-50 " variant="primary" size="lg" onClick={() => salvarAlteracoes()}>Salvar Alterações</Button>
                                <Button className="mt-3 w-50 " variant="danger" size="lg" onClick={() => excluirMercado()}>Excluir Mercado</Button>
                            </div>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>

};

export default ManegerMarket;

