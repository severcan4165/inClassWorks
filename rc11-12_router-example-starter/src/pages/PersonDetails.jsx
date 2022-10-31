import React, {useState, useEffect} from 'react'
import { useParams, useLocation, useNavigate, Navigate } from 'react-router-dom';


const PersonDetails = () => {
  const [person, setPerson] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  // const {state} = useLocation();
  // console.table(state);


  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  };
  
 
  useEffect(() => {
    getPerson();
  }, []);


  const { first_name, last_name, avatar } = person;
  
  return (
      <>
          <div className="container text-center mt-4">
      <h1>PERSON INFO</h1>
      <div className="row justify-content-center g-3">
        
        
            <div
              className=" col-sm-12 col-md-6 col-lg-4"
              type="button"
            >
              <img className="rounded" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
            <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">Home</button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">Go Back</button>
      </div>
       
      </div>
    </div>
      </>
  )
}

export default PersonDetails