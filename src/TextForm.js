import { clear } from '@testing-library/user-event/dist/clear';
import React,{useState} from 'react'
export default function TextForm(props) {
  const[text,setText]=useState("");
  const abc=()=>{
      let newText=text.toUpperCase();
      setText(newText);
  } 
  const change=(event)=>{
      setText(event.target.value);
  }
  const lower=()=>{
      let neText=text.toLowerCase();
      setText(neText);
  }
  const clear=()=>{
      let ne="";
      setText(ne);
  }
  const cpytxt=()=>{
    let txt=document.getElementById("myBox");
    txt.select();
    navigator.clipboard.writeText(txt.value);
  }
  const extraSpaces=()=>{
    let ne=text.split(/[ ]+/);
    setText(ne.join(" "))
  }
  return (
    <>
        <div className="form-group">
            <h1>{props.heading}</h1>
            <textarea name="form-control" id="myBox" cols="90" rows="10" value={text} onChange={change} placeholder="Enter your text here"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={abc}>Upper Casing</button>
        <button className="btn btn-dark mx-2" onClick={lower}>Lower Casing</button>
        <button className="btn btn-danger mx-2" onClick={clear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={cpytxt}>Copy Text</button>
        <button type="button" class="btn btn-success mx-2 my-2" onClick={extraSpaces}>Remove Extra Spaces</button>
        <div className="container my-2">
            <h2>Text Summary</h2>
            <p>{(text.split(" ").length)} words and {text.length} characters</p>
            <p>{0.008*(text.split(" ").length)}Minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}