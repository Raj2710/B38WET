import React,{useState,useEffect} from 'react'
import {url} from '../App'
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Dashboard() {
    let token = sessionStorage.getItem('token')
    let [users,setUsers] = useState([])
    let navigate = useNavigate()

    let getData = async()=>{
        try {
            let res = await axios.get(`${url}/all`,{
                headers:{
                    authorization:`Bearer ${token}`
                }
            })
            if(res.status===200)
            {
                setUsers(res.data.users)
            }
        } catch (error) {
            toast.error(error.response.data.message)
            if(error.response.status===401)
                handleLogout()
        }
    }

    let handleLogout = async()=>{
        sessionStorage.clear()
        navigate('/login')
    }

    useEffect(()=>{
        if(token)
            getData()
        else
            handleLogout()
    },[])

  return <div className='container-fluid wrapper'>
    <div className='nav-buttons'>
        <Button variant='danger' onClick={()=>handleLogout()}>Logout</Button>
        &nbsp;
        <Button variant='primary' onClick={()=>getData()}>Refresh</Button>
    </div>
    <div className='table-wrapper'>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created At</th>

            </tr>
        </thead>
        <tbody>
            {
                users.map((e,i)=>{
                    return <tr key={i}>
                        <td>{i+1}</td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.email}</td>
                        <td>{e.role}</td>
                        <td>{e.status}</td>
                        <td>{new Date(e.createdAt).toLocaleDateString('en-UK')}</td>
                    </tr>
                })
            }
            
        </tbody>
        </Table>
    </div>
  </div>
}

export default Dashboard