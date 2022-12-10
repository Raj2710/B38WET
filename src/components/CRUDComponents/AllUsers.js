import React, { useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function AllUsers() {
    let [users,setUsers] = useState([])
    let navigate = useNavigate()
    let handleDelete = async(id)=>{   
        try {
            let res = await axios.delete(`https://61ee1f7ed593d20017dbac50.mockapi.io/users/${id}`)
            if(res.status===200)
            {
                getData()
            }
        } catch (error) {
            console.log(error)
        }
    }   
    let getData = async()=>{
        // fetch('https://61ee1f7ed593d20017dbac50.mockapi.io/users')
        // .then((res)=>res.json())
        // .then((response)=>setUsers(response))
        // .catch(err=>console.log(err))

      try { 
        let res = await axios.get('https://61ee1f7ed593d20017dbac50.mockapi.io/users') 
        setUsers(res.data)
        
      } catch (error) {
        console.log(error)
      }

    // await axios.get('https://61ee1f7ed593d20017dbac50.mockapi.io/users')
    // .then((res)=>setUsers(res.data))
    // .catch((err)=>console.log(err))

    }
    useEffect(()=>{
        getData()
    },[])

  return <div className='container-fluid'>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>DOB</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((e)=>{
            return <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.dob}</td>
              <td>
                <Button variant='primary' onClick={()=>navigate(`/add-users/${e.id}`)}>
                  <i className="fas fa-pen-to-square"></i> Edit</Button>
                &nbsp;
                &nbsp;
                <Button variant='danger' onClick={()=>handleDelete(e.id)}> 
                <i className="fas fa-trash"></i> Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </div>
}

export default AllUsers