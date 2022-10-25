import { useState,useEffect } from "react";
import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  
  const url ="https://cw-axios-example.herokuapp.com/api/tutorials";

  
  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
