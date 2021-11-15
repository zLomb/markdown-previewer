import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import { marked } from 'marked';

function App() {

  const placeholder = `# React Markdown Previewer

  ## I'm a sub-heading! (H2)
  
  There's also inline code, \`<p>Hello!</p>\`
  
  \`\`\`
  // And multiline code:
  
  function example() {
    return 'Hello world!'
  }
  \`\`\`
  
  [I'm a link!](www.google.com)
  
  > And I'm a blockquote!
  > (I'm a blockquote but **bold**)
  
  - And I'm a list.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  _And you can also decorate your text with cat images_
  ![Cat](https://memegenerator.net/img/instances/85872113.jpg)
  `;

  const [text, setText] = useState(placeholder);
  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="container">
      <h1 id="title">Markdown Previewer</h1>
      <div className="row">
        <Editor handlechange = {handleChange} value={text}/>
        <Preview text={text}/>
      </div>
    </div>
  );
}

function Editor( { handlechange, value } ) {

  return (
    <div className="col-xs-12 col-md-5 box">
      <div className="box-header">Editor</div>
      <textarea id="editor" value={value} onChange={handlechange}></textarea>
    </div>
  );
}

function Preview( { text } ) {

  const getMarkdownText = () => {
    let rawMarkup = marked(text, {sanitize: true});
    return { __html: rawMarkup };
  }

  return (
    <div className="col-xs-12 col-md-7 box">
      <div className="box-header">Preview</div>
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
    </div>
  );
}

export default App;
