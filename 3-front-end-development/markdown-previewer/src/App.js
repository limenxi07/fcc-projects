import { useState } from 'react';
import { marked } from 'marked';

import './App.scss';

const App = () => {
  const [markdown, setMarkdown] = useState('PLACEHOLDER');

  const onContentChange = (event) => {
    setMarkdown(marked.parse(event.target.value));
  }
  
  return (
    <div className="App">
      <textarea id="editor" name="editor" onChange={onContentChange}></textarea>
      <div id="preview"></div>
    </div>
  );
}

export default App;
