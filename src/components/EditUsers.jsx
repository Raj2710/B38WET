import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector,useDispatch } from 'react-redux';
import {editUser} from '../redux/userReducer'
import { useNavigate,useParams } from 'react-router-dom';

function EditUsers() {
  let {id} = useParams()
  let data = useSelector((state)=>state.users.userData)
  let [firstName,setFName] = useState("")
  let [lastName,setLName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")
  let dispatch = useDispatch()
  let navigate = useNavigate()

  useEffect(()=>{
    if(id && id < data.length)  
    {
      setFName(data[id].firstName)
      setLName(data[id].lastName)
      setMobile(data[id].mobile)
      setEmail(data[id].email)
      setBatch(data[id].batch)
    }
    else
      navigate('/all-users')
  },[])

  let handleSubmit = ()=>{
      dispatch(editUser({index:id,data:{firstName,lastName,email,mobile,batch}}))
      navigate('/all-users')
  }
  return <div className='container-fluid'>
     <Form>
     <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" value={firstName} placeholder="Enter First Name" onChange={(e)=>setFName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" value={lastName} placeholder="Enter Last Name" onChange={(e)=>setLName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" value={mobile}  placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" value={batch}  placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
  </div>
}

export default EditUsers