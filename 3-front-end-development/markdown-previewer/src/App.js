import { useState } from 'react';
import { marked } from 'marked';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';

const App = () => {
  const [markdown, setMarkdown] = useState('PLACEHOLDER');

  const onContentChange = (event) => {
    setMarkdown(event.target.value);
  }
  
  return (
    <div className="App">
      <Container>
        <Row>
          <h1 id="heading">Markdown Previewer</h1>
        </Row>
        <Row>
          <Col>
            <h2>Editor</h2>
            <textarea id="editor" name="editor" onChange={onContentChange}></textarea>
          </Col>
          <Col>
            <h2>Preview</h2>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
