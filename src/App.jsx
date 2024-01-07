import React, { useState } from 'react'
import Card from "./components/Card"
function App() {
  let [todo , setTodo ] = useState(
    [
      {
        name: "Task-1",
        description : "Price-Card Task",
        status : "Completed"
      },
      {
        name: "Task-2",
        description : "Landing Page Task",
        status : "Completed"
      },
      {
        name: "Task-3",
        description : "Shop Home Page Task",
        status : "Completed"
      }
    ]
  )
  return <>
  <div>
      <div className='heading'>
        <h1>My <span>Todo</span></h1>
          <div>
            <input className='input' type="text" placeholder='Todo Name' />&nbsp;
            <input className='input' type="text" placeholder='Todo Description'></input>&nbsp;
            <button className='add_button'>Add <span>Todo</span></button>
          </div>
      </div> 

      <div className='list_heading'>
        <span className='list_heading1'>My <span>Todo's</span></span>
        <div>
            <span><b>Select Filter:</b></span>
            <select>
              <option className="option_all" value="All">All</option>
              <option className="option_completed" value="Completed">Completed</option>
              <option className="option_notCompleted" value="Not Completed">Not Completed</option>
            </select>
        </div>
      </div>

      <div className='my_list'>
        {
          todo.map((e,i)=>{
              return <Card todo={todo} setTodo={setTodo} key={i}/>
          })
        }
          
      </div>
    
  </div> 
  </>
}

export default App