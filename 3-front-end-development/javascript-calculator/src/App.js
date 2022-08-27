import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Container id="display">
        <Row>
          <Col xs={6}>1</Col>
          <Col>2</Col>
        </Row>
        <Row>
          <Col>1</Col>
          <Col xs={3}>2</Col>
          <Col xs={3}>3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
