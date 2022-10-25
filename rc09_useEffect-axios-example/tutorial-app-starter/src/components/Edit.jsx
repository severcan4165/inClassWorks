import React, {useState,useEffect} from 'react'

const Edit = ({handleEdit2, newItem}) => {
    const {id, title, description} = newItem;
    // const [editTutorial, setEditTutorial] = useState({"id": id, "title": title, "description": description})
    const [editTutorial, setEditTutorial] = useState({id, title, description})
   
    // const [newT, setNewT] = useState(title)
    // const [newD, setNewD] = useState(description)

// useEffect(() => {
//  setNewD(description)
//  setNewT(title)
// }, [title, description])

useEffect(() => {
setEditTutorial({id, title, description})
}, [id, title, description])



// const handleEdit = () => {
   
// };
// const handleSubmit = () => {
    
// }
  return (
    <div>
    <div className="modal fade" id="edit-modal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Tutorial
            </h1>


            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form  >
        <div className="mb-3 ">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="title"
            placeholder="Enter your title"
            onChange={(e)=>setEditTutorial({...editTutorial, title: e.target.value})}
            value ={editTutorial.title}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="desc"
            onChange={(e)=>setEditTutorial({ ...editTutorial, description: e.target.value})}
            value ={editTutorial.description}
            placeholder="Enter your Description"
           required
          />
        </div>
        
      </form></div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button data-bs-dismiss="modal" type="button" onClick={()=>handleEdit2(id, editTutorial.title, editTutorial.description)} className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Edit