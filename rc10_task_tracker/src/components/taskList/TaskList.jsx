import React from 'react'
import {RiDeleteBack2Fill} from "react-icons/ri"
import axios from "axios";


const TaskList = ({task , getData}) => {

  const handleDelete = async (id)=>{
    const url="https://6352596cffbb7da0f2d5f171.mockapi.io/api/tasks";
    try {
      await axios.delete(`${url}/${id}`)
    } catch (error) {
      console.log(error)
    }
  getData();
  }

  return (
            <div className="mt-2 rounded-2 p-2" >
              {task?.map((item)=>{
              const {id, task, date} = item;
              return(
                <div key = {id} className='mt-2 d-flex justify-content-between bg-secondary p-2 rounded-2'>

                        <div>
                            <h4>{task}</h4>
                            <p>{date}</p>
                        </div>

                        <div>
                              <RiDeleteBack2Fill onClick={()=>handleDelete(id)}            
                                  style={{
                                  cursor:"pointer",
                                  marginRight:"20px",
                                  marginTop: "1rem",
                                  fontSize:"2rem",
                              
                              }}/>
                        </div>
                
               </div>

              )
              
              })}
            </div>
   
  )
}

export default TaskList
