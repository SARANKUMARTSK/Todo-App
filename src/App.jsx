import React, { useState } from 'react'
import Card from "./components/Card"
function App() {
  let [add , setAdd]=useState([])
  let [add1 , setAdd1]=useState([])
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
      },
      {
        name: "Task-4",
        description : "Todo Task",
        status : "Not Completed"
      },
      {
        name: "Task-5",
        description : "Router Task",
        status : "Not Completed"
      }
    ]
  )
  let handleAdd=()=>{
    let newArray=[...todo]
    newArray.push({
      add, 
      add1
    }
    )
    setTodo(newArray)
    
  }
  return <>
  <div>
      <div className='heading'>
        <h1>My <span>Todo</span></h1>
          <div>
            <input className='input' type="text" value={add}  onChange={(e)=>{setAdd(e.target.value)}} placeholder='Todo Name' />&nbsp;
            <input className='input' type="text" value={add1}  onChange={(e)=>{setAdd1(e.target.value)}} placeholder='Todo Description'></input>&nbsp;
            <button onClick={()=>{handleAdd()}} className='add_button'>Add <span>Todo</span></button>
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
              return <Card data={e} todo={todo} setTodo={setTodo} key={i}/>
          })
        }
          
      </div>
    
  </div> 
  </>
}

export default App