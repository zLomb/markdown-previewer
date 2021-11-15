import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';

function App() {

  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="container">
      <div className="row">
        <Editor handlechange = {handleChange}/>
        <Preview text={text}/>
      </div>
    </div>
  );
}

function Editor( { handlechange } ) {

  return (
    <div className="col-xs-12 col-md-5 box">
      <div className="box-header">Editor</div>
      <textarea id="editor" onChange={handlechange}></textarea>
    </div>
  );
}

function Preview( { text } ) {
  return (
    <div className="col-xs-12 col-md-7 box">
      <div className="box-header">Preview</div>
      <div id="preview">{text}</div>
    </div>
  );
}

export default App;
