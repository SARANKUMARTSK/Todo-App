import React from 'react'
import "./Card.css"
function Card({todo,setTodo,data}) {

  console.log(data);
    let handleDelete=(i)=>{
        let newArray = [...todo]
        newArray.splice(i,1)
        setTodo(newArray)
    }
    console.log(todo.name);

    let handleEdit=(i)=>{
      
    }
  return <>
    <div className='todo_card'>
      <h2>Todo Name :{data.name} </h2>
      <h2>Description :</h2>
      <input className="todo_disc" type="text" value={data.description}></input>
        <div>   
            <span>Status :</span>&nbsp;
            <select value={data.status}>
                {/* <option value="All">All</option> */}
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed</option>
            </select>
        </div>
        <button onClick={()=>{handleEdit()}}className='edit_button'>Edit</button>
        <button onClick={()=>{handleDelete()}} className='delete_button'>Delete</button>
    </div>
  </>
}

export default Card