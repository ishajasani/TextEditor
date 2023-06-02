import { useState } from "react";
import React from "react";
export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    props.showAlert("Converted to Uppercase" , "success");

    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase" , "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);

  };

  const clearText = (event)=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared" , "success");

  };
  return (
    <>
      <div className="container " style={{color: props.mode==='light'? 'black' : 'white'}}>
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={{backgroundColor: props.mode==='light'? 'white' : 'black' , color:props.mode==='light'? 'black' : 'white'}}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert To Lowercase
          </button>
          <button className="btn btn-primary " onClick={clearText}>
           Clear Text
          </button>
        </div>
      </div>
      <div className="container my-3" style={{color: props.mode === 'light'? 'black' : 'white'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length-1)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text"}</p>
      </div>
    </>
  );
}
