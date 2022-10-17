import { useState } from "react";

const HookState = () => {
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({
        name:"johny",
        surname: "black",
        age:25,
    });

    const inc = ()=>{
        setCount(count+1)
    }
    // const dec = ()=>{
    //     setCount(count-1)
    // }
    const clear = ()=>{
        setCount(0)
    }
    const incAge = ()=>{
        setPerson({...person, age:person.age+1})
    }


  return (
    <div className="container text-center mt-4">
    <section>
      <h1>USESTATE HOOK</h1>
      <h2 className="display-4 text-danger">COUNT:{count}</h2>
      <button onClick={inc} className="btn btn-success">
        INC
      </button>

      <button onClick={clear} className="btn btn-dark">
        CLR
      </button>
      {/* <button onClick={dec} className="btn btn-danger">
      DEC
    </button> */}
      <button onClick={()=> count>0 && setCount(count-1)}
       
        className="btn btn-danger"
      >
        DEC
      </button>
    </section>
    <section>
      <h1>USESTATE OBJECT</h1>
      <h2>{person.name}</h2>
      <h2>{person.surname}</h2>
      <h4>{person.age}</h4>
      <button onClick={incAge} className="btn btn-info">
        inc age
      </button>
    </section>
  </div>
  )
}

export default HookState