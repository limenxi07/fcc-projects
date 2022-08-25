import { useState } from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';

const App = () => {
  marked.setOptions({ // enable line breaks with return button
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
  });

  const [markdown, setMarkdown] = useState(`
  # heading
  ## subheading
  [link](https://github.com/)
  inline code \` var x = 4 \`
  - list item 
  \`\`\` 
  multiline 
  code 
  \`\`\`
  **bold text**
  _italics_
  > block quote
  ![google logo](https://img.icons8.com/color/48/000000/google-logo.png)
  `); // placeholder text

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
            <textarea id="editor" name="editor" onChange={onContentChange} value={markdown}></textarea>
          </Col>
          <Col xs={1}></Col>
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
