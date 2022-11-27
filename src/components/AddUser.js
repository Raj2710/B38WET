import React,{useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import {UserContext} from './ContextComponent/UserContextComponent'

function AddUser() {
  let context = useContext(UserContext)
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")
  let [timings,setTimings] = useState("")

  let navigate = useNavigate()

  let handleSubmit = ()=>{
    let newData = {name,email,mobile,batch,timings}
    let newArray = [...context.users]
    newArray.push(newData)
    context.setUsers(newArray)
    navigate('/dashboard')
  }
  return <>
 <div className='container-fluid'>
 <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Session Timings</Form.Label>
        <Form.Select defaultValue={"0"} onChange={(e)=>setTimings(e.target.value)}>
          <option value = "0" disabled>Session Timings</option>
          <option value="10am to 12pm">10am to 12pm</option>
          <option value="12pm to 2pm">12pm to 2pm</option>
          <option value="2pm to 4pm">2pm to 4pm</option>
          <option value="4pm to 6pm">4pm to 6pm</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
 </div>
  </>
}

export default AddUser