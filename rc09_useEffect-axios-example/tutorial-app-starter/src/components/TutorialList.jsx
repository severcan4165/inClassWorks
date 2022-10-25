import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import Edit from "./Edit";
import { useState} from "react";

//test Data

  // const tutorials = [
  //   {
  //     id: 1,
  //     title: "JS",
  //     description: "JS is a programming language",
  //   },
  //   {
  //     id: 2,
  //     title: "React",
  //     description: "JS library for UI design",
  //   },
  // ];

const TutorialList = ({tutorial, url, getTutorial}) => {
  const [newItem, setNewItem] = useState({
    id:"",
    title:"",
    description:""
  })


  




const handleEdit2 = async (id, title, description) => {

    try {
      await axios.put(`${url}/${id}`, {title, description})
    } catch (error) {
      console.log(error)
    }
    getTutorial();
  };


const handleDelete = async (id) => {
  try {
    await axios.delete(`${url}/${id}`)
    getTutorial();
  } catch (error) {
    console.log(error)
  }
};

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
         
           {tutorial?.map(item=>{
            return (
              <tr key={item.id}>
              <th>{item.id}</th>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td className="text-center text-nowrap">
                <FaEdit
                  size={20}
                  type="button"
                  className="me-2 text-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#edit-modal"
                  onClick={() => setNewItem({...item})}
                />
                <AiFillDelete
                  size={22}
                  type="button"
                 
                  className="text-danger "
                  onClick={() => handleDelete(item.id)}
                />
              </td>
            </tr>
            )
           })}
             
         
       
        </tbody>
      </table>
      <Edit handleEdit2 = {handleEdit2} newItem = {newItem} />
    </div>
  );
};

export default TutorialList;
