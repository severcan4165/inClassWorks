import { useState,useEffect } from "react";
import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const [tutorial, setTutorial] = useState([]);
  const url ="https://cw-axios-example.herokuapp.com/api/tutorials";


  const getTutorial = async () => {

    try {
    const {data} =  await axios(url);
    setTutorial(data);
   
    } catch (error) {
      console.log(error);
    }
    
  }
  
  
  useEffect(()=>{
    getTutorial();
  }, [])
  return (
    <>
      <AddTutorial getTutorial = {getTutorial} url = {url} />
      <TutorialList getTutorial = {getTutorial} tutorial = {tutorial} url = {url} />
    </>
  );
};

export default Home;
