import React,{ useReducer } from "react"
import {Button} from 'react-bootstrap'
const initialValues = {count:0,name:""}
function reducer(state,action){
    switch(action.type){
        case 'increment':return {...state, count:state.count+1}
        case 'decrement':return {...state, count:state.count-1}
        case 'reset': return initialValues
        case 'updateName':return {...state, name:action.value}
    }
}
function UseReducer() {
    const   [state,dispatch] = useReducer(reducer,initialValues)
  return <div className="container-fluid">
    <h1>UseReducer</h1>
    <div>
        <Button variant="danger" onClick={()=>dispatch({type:'decrement'})}>-</Button>
        &nbsp;&nbsp;{state.count}&nbsp;&nbsp;
        <Button variant="success" onClick={()=>dispatch({type:'increment'})}>+</Button>
        <br/><br/>
        <Button variant="warning" onClick={()=>dispatch({type:'reset'})}>Reset</Button>
        <br/><br/>
        <input type={"text"} value={state.name} onChange={(e)=>dispatch({type:'updateName',value:e.target.value})}/>
        <div>{state.name}</div>
    </div>
    </div>
}

export default UseReducer