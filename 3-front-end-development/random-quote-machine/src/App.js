import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

import './App.scss';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const tweet = 'https://twitter.com/intent/tweet?text=' + `${quote} ${author}`.replace(/ /g, '%20');
  const root = document.documentElement;
  const colors = ['#3a5a40', '#14213d'];

  useEffect(() => fetchQuote(), []);

  const fetchQuote = () => {
    let rand = Math.floor(Math.random() * 100);
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res => res.json())
    .then((data) => {
      setQuote(data['quotes'][rand]['quote']);
      setAuthor(`- ${data['quotes'][rand]['author']}`);
      root?.style.setProperty('--primary', colors[Math.floor(Math.random() * colors.length)])
    });
  };

  return (
    <div className="App">
      <div id="quote-container">
        <p id="quote">{quote}</p>
        <p id="author">{author}</p>
        <Button id="new-quote" onClick={fetchQuote}>New quote</Button>
        <a id="tweet-quote" href={tweet}><img src="https://img.icons8.com/ios-glyphs/90/000000/twitter--v1.png" alt="Twitter logo"/></a>
      </div>
    </div>
  );
}

export default App;
