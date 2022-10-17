import React from 'react'
let message ="hey this is a starting h1";
const Events = () => {
  const handleClick = ()=>{
    alert("button clicked");
  }
  const handleClear = (msg)=>{
    alert(msg);
  }
  const handleChange = (e)=>{
    console.log(e.target)
    message = "it has changed by clicking change button";
    console.log(message);
  }

  return (
    <div className="container text-center mt-4">
    <h1>{message}</h1>
    <button className="btn btn-success" onClick={handleClick}>
      Click
    </button>

    {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
    bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
    takdirde event fonksiyonu event gerceklesmeden cagirilir */}
    <button className="btn btn-dark" onClick={(e)=>handleClear("clear button clicked")}>Clear</button>


     <button onClick={(e) => handleChange(e)} className="btn btn-danger">
      Change
    </button> 
  </div>
  )
}

export default Events