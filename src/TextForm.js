import { clear } from '@testing-library/user-event/dist/clear';
import React,{useState} from 'react'
export default function TextForm(props) {
  const[text,setText]=useState("");
  const upper=()=>{
      let newText=text.toUpperCase();
      setText(newText);
      props.setAlert("Converted to Upper Case","success");
  } 
  const change=(event)=>{
      setText(event.target.value);
  }
  const lower=()=>{
      let neText=text.toLowerCase();
      setText(neText);
      props.setAlert("Converted to Lower Case","success");
  }
  const clear=()=>{
      let ne="";
      setText(ne);
      props.setAlert("Text Cleared","danger");
  }
  const cpytxt=()=>{
    navigator.clipboard.writeText(text);
    props.setAlert("Text Copied","success");
  }
  const extraSpaces=()=>{
    let ne=text.split(/[ ]+/);
    setText(ne.join(" "));
    props.setAlert("Extra Spaces Removed ","success");
  }
  return (
    <>
        <div className="form-group" style={{backgroundColor : props.mode=='dark'?'grey':'white', color: props.mode=='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <textarea name="form-control" id="myBox" cols="90" rows="10" value={text} onChange={change} placeholder="Enter your text here"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={upper}>Upper Casing</button>
        <button className="btn btn-dark mx-2 my-1" onClick={lower}>Lower Casing</button>
        <button className="btn btn-danger mx-2 my-1" onClick={clear}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={cpytxt}>Copy Text</button>
        <button type="button" class="btn btn-success mx-2 my-2" onClick={extraSpaces}>Remove Extra Spaces</button>
        <div className="container my-2" style={{backgroundColor : props.mode=='dark'?'grey':'white', color: props.mode=='dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{(text.split(/\s+/).filter((element)=>{return element.length!=0}).length)} words and {text.length} characters</p>
            <p>{0.008*(text.split(" ").filter((element)=>{return element.length!=0}).length)} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}