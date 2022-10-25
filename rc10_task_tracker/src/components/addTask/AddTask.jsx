import React,{useState, useEffect} from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import axios from "axios"


const AddTask = ({getData}) => {
  const [task, setTask] = useState("")
  const [date, setDate] = useState("")


const handleFormSubmit = (e) =>{
  e.preventDefault();
  const newTask = {task,date};

  addNewTask(newTask);
  setTask("");
  setDate("");

}


const addNewTask = async (newTask) =>{
  const url="https://6352596cffbb7da0f2d5f171.mockapi.io/api/tasks";
  try {
    await axios.post(url,newTask)
   
  } catch (error) {
    console.log(error)
  }
  getData();
}





  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control onChange={(e)=>setTask(e.target.value)} type="text" placeholder="Enter task"/>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control onChange={(e)=>setDate(e.target.value)} type="date"/>
      </Form.Group>
    <div className="text-center">
      <Button variant="primary w-50 " type="submit">
        SAVE
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default AddTask