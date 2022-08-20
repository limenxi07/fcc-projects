import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

import './App.scss';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleClick = () => fetchQuote();

  const fetchQuote = useEffect(() => {
    let rand = Math.floor(Math.random() * 100);
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').then(res => res.json()).then((data) => {
      setQuote(data['quotes'][rand]['quote']);
      setAuthor(data['quotes'][rand]['author']);
    });
  }, []);

  return (
    <div className="App">
      <div id="quote-container">
        <p id="quote">{quote}</p>
        <p id="author">{author}</p>
        <button id="new-quote" onClick={handleClick}>New quote</button>
        <Button id="tweet-quote">Tweet</Button>
      </div>
    </div>
  );
}

export default App;
