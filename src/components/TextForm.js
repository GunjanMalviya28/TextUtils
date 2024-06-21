import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLoclick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleClearclick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText= '';
        setText(newText);
    }
    //  const handleinverseclick = () => {
    //     console.log("inverse click is triggered");
    //     let newtext = "";
    //     for (let i = text.length - 1; i >= 0; i--) {
    //       newtext += text[i];
    //     }
    //     setText(newtext);
    //   };
     const handleOnChange = (event)=>{
        // console.log("Onchange");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter the text here2');
    
  return (
    <>
    <div className="container">
    
<div className="mb-3">
    <h1>{props.heading}</h1>
  
  <textarea className="form-control" value= {text} onChange= {handleOnChange}id="mybox" rows="8"></textarea>
</div>
    <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to uppercase </button>
    <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to lowercase </button>
    <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear Text </button>
    {/* <button className="btn btn-primary mx-2" onClick={handleinverseclick}>Reverse Text </button> */}
    </div>
    <div className="container my-2">
        <h1>Your Text Summary </h1>
        <p>{text.split(" ").length}{text.length}words and  {text.length}characters</p>
        <p>{0.008 *text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  )
}
