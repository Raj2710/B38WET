import React,{useContext,useId} from 'react'
import BasicCard from './CardComponents/BasicCard'
import ProgressCard from './CardComponents/ProgressCard'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import {UserContext} from './ContextComponent/UserContextComponent'
import {DashboardContext} from './ContextComponent/DashboardContextComponent'
function Dashboard() {
  let context = useContext(UserContext)
  let dash = useContext(DashboardContext)
  let navigate = useNavigate()
  let handleDelete = (i)=>{
    let newArray = [...context.users]//deep copy the main array
    newArray.splice(i,1)//delete the element in the new array
    context.setUsers(newArray)//update the new array to the state function
  }
  return <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
      <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                      className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
          <div className="row">
            <BasicCard lable='Earnings (Monthly)' value={dash.earningsMonthly} icon='fa-calendar' border='primary'/>
            <BasicCard lable='Earnings (Annual)' value={dash.earningsYearly} icon='fa-dollar-sign' border='success'/>
            <ProgressCard lable='Tasks' value={dash.task} icon='fa-clipboard-list' border='info'/>
            <BasicCard lable='Pending Requests' value={dash.pendingRequest} icon='fa-comments' border='warning'/>
          </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Timings</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          context.users.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.batch}</td>
              <td>{e.timings}</td>
              <td>
                <Button variant='primary' onClick={()=>navigate(`/edit-user/${i}`)}>
                  <i className="fas fa-pen-to-square"></i> Edit</Button>
                &nbsp;
                &nbsp;
                <Button variant='danger' onClick={()=>handleDelete(i)}> 
                <i className="fas fa-trash"></i> Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>

    </div>

    </div>
    </div>
}

export default Dashboard