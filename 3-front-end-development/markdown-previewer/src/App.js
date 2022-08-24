import { useState } from 'react';
import { marked } from 'marked';

import './App.scss';

const App = () => {
  const [markdown, setMarkdown] = useState('PLACEHOLDER');

  const onContentChange = (event) => {
    setMarkdown(event.target.value);
  }
  
  return (
    <div className="App">
      <textarea id="editor" name="editor" onChange={onContentChange}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{
        __html: marked(markdown)
      }}></div>
    </div>
  );
}

export default App;
