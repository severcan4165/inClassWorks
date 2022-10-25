import React,{useState,useEffect} from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button"
import axios from "axios";

const Home = () => {
  const[showBar, setShowBar] = useState(false);
  const [barText, setBarText] = useState("Show Task Bar");
  const [task, setTask] = useState([])

  const textB = showBar ? "Show Task Bar" : "Hide Task Bar";


  
  const url="https://6352596cffbb7da0f2d5f171.mockapi.io/api/tasks"

const handleToggle = () => {
  setShowBar(!showBar);
  setBarText(textB);
}
// CRUD - Read 
  const getData = async() =>{
    const {data} = await axios(url);
    setTask(data);
    console.log(data);
  }
  useEffect(() => {
    getData();
    

  }, [])
  



  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button onClick={handleToggle} variant="danger">{barText}</Button>
      {showBar &&  <AddTask task = {task} getData ={getData} />  }
          
      <TaskList task={task} getData ={getData}/>
    </div>
  );
};

export default Home;
