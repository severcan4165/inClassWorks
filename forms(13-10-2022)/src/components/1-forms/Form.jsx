import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleChange = (e)=>{
  setInput(e.target.value);
}
const handleEmail = (e)=>{
  setEmail(e.target.value);
}
const handlePass = (e)=>{
  setPassword(e.target.value);
}

const handleSubmit = (e)=>{
e.preventDefault();
alert(`username: ${username}
        email:${email},
         password:${password}
`);
setInput("");
setEmail("");
setPassword("");
}

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="display-5 text-danger">FORMS</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span className="text-danger">{input}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value = {input}
          onChange={handleChange}
   
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
          value={email}
          onChange = {handleEmail}
          
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
          value={password}
          onChange={handlePass}
        
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
