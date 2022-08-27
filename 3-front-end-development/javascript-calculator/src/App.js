import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Container id="main-container">
        <p id="display">0</p>
        <Row>
          <Col className="button ac" id="clear" xs={6}>AC</Col>
          <Col className="button operator" id="change-sign">+/-</Col>
          <Col className="button operator" id="divide">÷</Col>
        </Row>
        <Row>
          <Col className="button" id="seven">7</Col>
          <Col className="button" id="eight">8</Col>
          <Col className="button" id="nine">9</Col>
          <Col className="button operator" id="multiply">×</Col>
        </Row>
        <Row>
          <Col className="button" id="four">4</Col>
          <Col className="button" id="five">5</Col>
          <Col className="button" id="six">6</Col>
          <Col className="button operator" id="subtract">-</Col>
        </Row>
        <Row>
          <Col className="button" id="one">1</Col>
          <Col className="button" id="two">2</Col>
          <Col className="button" id="three">3</Col>
          <Col className="button operator" id="add">+</Col>
        </Row>
        <Row>
          <Col className="button" id="zero" xs={6}>0</Col>
          <Col className="button" id="decimal">.</Col>
          <Col className="button eq" id="equals">=</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
