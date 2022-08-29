import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './App.scss';

const App = () => {
  const [val, setVal] = useState('0');
  const [prev, setPrev] = useState('0');
  const [op, setOp] = useState('');
  const [sign, setSign] = useState('+');

  const handleNumber = (e) => {
    if (val.length > 11) {
      if (val !== 'HIT DIGIT LIMIT') {
        setPrev(val);
      }
      setVal('HIT DIGIT LIMIT');
      setTimeout(() => setVal(prev), 1000);
    } else {
      if (val[0] == '0') {
        setVal(e.target.id);
      } else if (!val.includes('.') || e.target.id !== '.') {
        setVal(val + e.target.id);
      } 
    };
  };

  const handleOperator = (e) => {

  };

  const handleClear = (e) => {
    setVal('0');
    setPrev('0');
    setSign('+');
    setOp('');
  };

  const handleSign = (e) => {
    setSign(e.target.id);
    setPrev(val);
    setVal(handleEvaluate());
  };

  const handleEvaluate = (e) => {

  };

  return (
    <div className="App">
      <Container id="main-container">
        <p id="display">{val}</p>
        <Row>
          <Col onClick={handleClear} className="button ac" id="clear" xs={6}>AC</Col>
          <Col onClick={handleSign} className="button ac" id="change-sign">+/-</Col>
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
          <Col onClick={handleNumber} className="button" id=".">.</Col>
          <Col onClick={handleEvaluate} className="button operator" id="equals">=</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
