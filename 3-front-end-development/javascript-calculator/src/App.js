import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './App.scss';

const App = () => {
  const [output, setOutput] = useState(0);

  const handleNumber = (e) => {
    setOutput(e.target.id);
  };

  return (
    <div className="App">
      <Container id="main-container">
        <p id="display">{output}</p>
        <Row>
          <Col onClick={handleClear} className="button ac" id="clear" xs={6}>AC</Col>
          <Col onClick={handleNumber} className="button ac" id="change-sign">+/-</Col>
          <Col onClick={handleOperator} className="button operator" id="divide">÷</Col>
        </Row>
        <Row>
          <Col onClick={handleNumber} className="button" id="7">7</Col>
          <Col onClick={handleNumber} className="button" id="8">8</Col>
          <Col onClick={handleNumber} className="button" id="9">9</Col>
          <Col onClick={handleOperator} className="button operator" id="multiply">×</Col>
        </Row>
        <Row>
          <Col onClick={handleNumber} className="button" id="4">4</Col>
          <Col onClick={handleNumber} className="button" id="5">5</Col>
          <Col onClick={handleNumber} className="button" id="6">6</Col>
          <Col onClick={handleOperator} className="button operator" id="subtract">-</Col>
        </Row>
        <Row>
          <Col onClick={handleNumber} className="button" id="1">1</Col>
          <Col onClick={handleNumber} className="button" id="2">2</Col>
          <Col onClick={handleNumber} className="button" id="3">3</Col>
          <Col onClick={handleOperator} className="button operator" id="add">+</Col>
        </Row>
        <Row>
          <Col onClick={handleNumber} className="button" id="0" xs={6}>0</Col>
          <Col onClick={handleNumber} className="button" id="decimal">.</Col>
          <Col onClick={handleEvaluate} className="button operator" id="equals">=</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
