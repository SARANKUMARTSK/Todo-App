import React from 'react'
import "./Card.css"
function Card({todo,setTodo}) {

    let handleDelete=(i)=>{
        let newArray = [...todo]
        newArray.splice(i,1)
        setTodo(newArray)
    }
    console.log(todo.name);
  return <>
    <div className='todo_card'>
      <h2>Todo Name :{todo.name} </h2>
      <h2>Description :</h2>
      <input className="todo_disc" type="text" value={todo.description}></input>
        <div>   
            <span>Status :</span>&nbsp;
            <select value={todo.status}>
                {/* <option value="All">All</option> */}
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed</option>
            </select>
        </div>
        <button className='edit_button'>Edit</button>
        <button onClick={()=>{handleDelete()}} className='delete_button'>Delete</button>
    </div>
  </>
}

export default Card