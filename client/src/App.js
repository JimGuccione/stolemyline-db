import React from 'react';

import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  Button,
  FormGroup,
  Input,
  Col
} from "reactstrap";

import MovieQuotes from "./MovieQuotes";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          StoleMyLine
        </p>
      </header>
      <Container fluid className="centered">
        <Navbar dark color="dark">
          <NavbarBrand href="/">Stole My Line</NavbarBrand>
        </Navbar>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <MovieQuotes/>
      </Container>

    </div>
  );
}

export default App;
