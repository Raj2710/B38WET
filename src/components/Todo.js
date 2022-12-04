import React,{useReducer,useState} from 'react'
import { TodoReducer,initialVlaues } from './ReducerComponent/TodoReducer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Actions } from "./ReducerComponent/action"

function Todo() {
  const [state,dispatch] = useReducer(TodoReducer,initialVlaues)
  const [name,setName] = useState("")

  console.log(state)
  return <div className='container-fluid'>
    <h1 style={{textAlign:"center"}}>Today's Task</h1>
    <Form.Group className="mb-3">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" 
        value={name}
        placeholder="Enter Taks" 
        onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" 
      onClick={()=>{
        dispatch({type:Actions.ADD,payload:name})
        setName("")}}>
        Create
      </Button>
    <br/>
    <br/>
    <Button variant="primary" 
      onClick={()=>{
        dispatch({type:Actions.CLEAR})}}>
        Clear All
      </Button>
    <div  style={{textAlign:"center"}}>
        {
            state.data.map((e,i)=>{
                return <div key={i}>
                {
                    e.completed?
                    <li onClick={()=>{
                        dispatch(
                            {
                                type:Actions.CHANGE,
                                payload:{index:i,completed:false
                            }})
                    }}><s>{e.name}</s></li>:
                    <li onClick={()=>{
                        dispatch(
                            {
                                type:Actions.CHANGE,
                                payload:{index:i,completed:true
                            }})
                    }}>{e.name}</li>
                }
                </div>
            })
        }
    </div>
    
  </div>
}

export default Todo