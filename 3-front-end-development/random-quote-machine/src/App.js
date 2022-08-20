import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div id="quote-container">
        <p id="quote">Quote</p>
        <p id="author">Author</p>
        <Button id="new-quote">New quote</Button>
        <Button id="tweet-quote">Tweet</Button>
      </div>
    </div>
  );
}

export default App;
