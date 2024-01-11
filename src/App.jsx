import React, { useState } from 'react'
import Card from "./components/Card"
import Modal from './components/Modal'
function App() {
  let [showModal , setShowModal] = useState(false);
  let [editName , setEditName] = useState("");
  let [editDescription,setEditDescription] = useState("");
  let [edittodo , setEditTodo]= useState({})

  let [add , setAdd]=useState([])
  let [add1 , setAdd1]=useState([])
  let [todo , setTodo ] = useState(
    [
      {
        id : 1 ,
        name: "Task-1",
        description : "Price-Card Task",
        status : "Completed"
      },
      {
        id : 2,
        name: "Task-2",
        description : "Landing Page Task",
        status : "Completed"
      },
      {
        id : 3,
        name: "Task-3",
        description : "Shop Home Page Task",
        status : "Completed"
      },
      {
        id : 4 ,
        name: "Task-4",
        description : "Todo Task",
        status : "Not Completed"
      },
      {
        id : 5 ,
        name: "Task-5",
        description : "Router Task",
        status : "Completed"
      }
    ]
  )
  
 const [value,setValue] = useState(
    [
      {
        id : 1 ,
        name: "Task-1",
        description : "Price-Card Task",
        status : "Completed"
      },
      {
        id : 2,
        name: "Task-2",
        description : "Landing Page Task",
        status : "Completed"
      },
      {
        id : 3,
        name: "Task-3",
        description : "Shop Home Page Task",
        status : "Completed"
      },
      {
        id : 4 ,
        name: "Task-4",
        description : "Todo Task",
        status : "Not Completed"
      },
      {
        id : 5 ,
        name: "Task-5",
        description : "Router Task",
        status : "Completed"
      }
    ])
  let handleEdit =(i)=>{
    setShowModal(true)
    // console.log(i);
    let newArray = [...todo]
    newArray=newArray.filter((todo)=>(todo.id===i))
    // console.log(newArray);
    setEditTodo(newArray[0])

  }
  let handleUpdate = (name , description , status)=>{
   console.log(name,description,edittodo);
   let newArray = [...todo];
   newArray.map((e,i)=>{
    if(e.id===edittodo.id){
      newArray[i]={
        id:edittodo.id,
        name,
        description,
        status
      }
      setShowModal(false)
      setEditTodo({})
      setTodo(newArray);
      return;
    }
    console.log(i);
   })
   
  }
  let handleDelete=(i)=>{
      let newArray = [...todo]
      newArray=newArray.filter((todo)=>(todo.id!==i))
      setTodo(newArray);
      setValue(newArray);
  }
  let handleAdd=()=>{
    let newArray=[...todo]
    newArray.push({
      id:`${add}${Math.random()}`,
      name:add, 
      description: add1, 
      status : "Not Completed"
    }
    )
    setTodo(newArray);
    setValue(newArray);
  }
  const onFilter=(e)=>{
    // console.log(e.target.value);
    const status = e.target.value;

    if(status==='Not Completed'){
      let newArray = [...value];
      newArray=newArray.filter((data)=>data.status==='Not Completed')
      setTodo(newArray);
    }
    else if(status==='Completed'){
      let newArray = [...value];
      newArray=newArray.filter((data)=>data.status==='Completed')
      setTodo(newArray);
    }
    else
    {
      let newArray = [...value];
      setTodo(newArray);
    }
  }
  return <>
  <div>
      <div className='heading'>
        <h1>My <span>Todo</span></h1>
          <div>
            <input className='input' type="text" value={add} onChange={(e)=>{setAdd(e.target.value)}} placeholder='Todo Name' />&nbsp;
            <input className='input' type="text" value={add1} onChange={(e)=>{setAdd1(e.target.value)}} placeholder='Todo Description'></input>&nbsp;
            <button onClick={()=>{handleAdd(add,add1)}} className='add_button'>Add <span>Todo</span></button>
          </div>
      </div> 
      {
        showModal && <Modal  data={edittodo} editDescription={editDescription} handleEdit={handleUpdate} setEditDescription={setEditDescription}/>
      }
        

      <div className='list_heading'>
        <span className='list_heading1'>My <span>Todo's</span></span>
        <div>
            <span><b>Select Filter:</b></span>
            <select onChange={(e)=>onFilter(e)}>
              <option  className="option_all" value="All">All</option>
              <option className="option_completed" value="Completed">Completed</option>
              <option className="option_notCompleted" value="Not Completed">Not Completed</option>
            </select>
        </div>
      </div>

      <div className='my_list'>
        {
          todo.map((e,i)=>{
              return <Card data={e} todo={todo} setTodo={setTodo} key={e.id}  handleDelete={handleDelete} handleUpdate={handleUpdate} handleEdit={handleEdit} />
          })
        }
          
      </div>
    
  </div> 
  </>
}

export default App