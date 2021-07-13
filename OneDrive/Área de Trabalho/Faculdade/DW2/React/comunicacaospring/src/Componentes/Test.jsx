import React, { Component } from 'react';
import {Col, Container, Navbar, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

class Test extends Component {
    render() {
        return (
                <Container fluid>
                    <Row>
                        <Col>
                        <Navbar bg="dark" variant="dark" fixed="top">
                            <Navbar.Brand>
                                <Image src="https://react-bootstrap.github.io/logo.svg" width="25" height="25" className="App-logo"></Image> {" "}
                                React-Bootstrap
                            </Navbar.Brand>
                        </Navbar>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <Row>
                        <Col>
                          <div className="Titulo"><h1>Cadastro de Usuário</h1></div>  
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col>
                        <Image src="print-crud.png" height="400" className="Center"></Image>
                        </Col>
                    </Row>
                </Container>    
        );
    }
}

export default Test;