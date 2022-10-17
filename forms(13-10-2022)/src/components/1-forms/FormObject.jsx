import { useState } from "react";

const FormObject = () => {
 const [formvalues, setFormvalues] = useState({
  name:"",
  email:"",
  password:"",
 });
 const{name, email, password} = formvalues;

const handleChange = (e)=>{
  setFormvalues({...formvalues, [e.target.id]:e.target.value})
}

const handleSubmit = (e)=>{
  e.preventDefault();
  alert(`username: ${name}
          email:${email},
           password:${password}
  `);
  setFormvalues({
    name:"",
    email:"",
    password:"",
  })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="display-5 text-danger">FORM OBJECT</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span className="text-danger">{name}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          // value={name}
          onChange = {handleChange}
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email: <span className="text-danger">{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          // value={email}
          onChange={handleChange}
         
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          // value={password}
          onChange={handleChange}
          
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormObject;
