import React from 'react'
import { useState } from 'react'

function Modal({handleEdit ,data  }) {
  // console.log(data);
  let [editName , setEditName] = useState("");
  let [editDescription,setEditDescription] = useState("");
  let [editStatus ,setEditStatus] = useState("")
  return <>
  <div id='modal'>
    <h1>Edit Your Todo Here...</h1>
    <label autoFocus htmlFor="name">Name :</label><br />
    <input className='edit_bar' type="text" placeholder='Enter Your Todo Name'  onChange={(e)=>{setEditName(e.target.value)}}/>
    <br />
    <label htmlFor="Description">Description :</label><br />
    <input  className='edit_bar' type="text" placeholder='Enter Your Description' onChange={(e)=>{setEditDescription(e.target.value)}}/>
    <br />
    <label htmlFor="Status">Status : </label><br />
        <select className='edit_bar' onChange={(e)=>{setEditStatus(e.target.value)}}>
            <option  value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
        </select>
        <button onClick={()=>{handleEdit(editName,editDescription,editStatus)}} className='update_button'>Update</button>
    

  </div>
  </>
}

export default Modal