import { useState } from "react";

const KeyboardClipboard = () => {
 
const [input, setInput] = useState("");

const handleChange = (e) =>{
  e.target.value = e.target.value.toLocaleUpperCase();
  setInput(e.target.value);
}
const handleKey = (e) =>{
  if(e.keyCode >= 48 && e.keyCode <=57 ){
    alert("please do not enter number")
    e.preventDefault();
  }
  e.keyCode === 13 && setInput("");
  
}
const handleAreaPaste = () => {
  alert("Nooooooooooo");
  e.target.style.border = "2px solid red";
  e.target.value += e.clipboardData.getData("text").toLocaleUpperCase();
  e.preventDefault();
  
}

  return (
    <div className="container text-center">
      <h1>CLIPBOARD EVENTS</h1>
      <input
        className="form-control"
        type="text"
        value={input}
       onKeyDown={handleKey}
       onChange={handleChange}
      />

      <p
       onCopy={(e)=> {
        e.preventDefault();
        alert("you can't copy this")}
       }
       
        className="text-start mt-4"
      >
        {input}
      </p>

      <textarea
        className="form-control"
        name="area"
        id="area"
        rows="10"
        onPaste={handleAreaPaste}
       
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
