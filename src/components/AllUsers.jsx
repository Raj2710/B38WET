import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {useSelector,useDispatch} from 'react-redux'
import {deleteUser} from './../redux/userReducer'
import { useNavigate } from 'react-router-dom';

function AllUsers() {
  let data = useSelector((state)=>state.users.userData)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  return <div className='container-fluid'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.firstName}</td>
            <td>{e.lastName}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>{e.batch}</td>
            <td>
              <Button variant='primary' onClick={()=>navigate(`/edit-users/${i}`)}>Edit</Button>
              &nbsp;&nbsp;
              <Button variant='danger' 
              onClick={()=>dispatch(deleteUser({index:i}))}>Delete</Button>
            </td>
          </tr>
          })
        }
      </tbody>
    </Table>
  </div>
}

export default AllUsers