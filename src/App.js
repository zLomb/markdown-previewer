import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import { marked } from 'marked';

function App() {

  const [text, setText] = useState('# Hello! (H1) \n## Hello! (H2)\n[I am a link!](www.google.com) \n And here is some inline code too! `<div></div>`\n');
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
