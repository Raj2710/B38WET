import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import NestedExample from './components/NestedExample';
import Account from './components/NestedComponents/Account'
import Profile from './components/NestedComponents/Profile'
function App() {
  let data = {
    earningsMonthly:"40,000",
    earningsYearly:"2,15,000",
    task:"70",
    pendingRequest:"18",
  }

  let [users,setUsers] = useState([
    {
      name:"Shamshath",
      email:"shamshath@gmail.com",
      mobile:"9876987532",
      batch:"B38WET",
      timings:"11am to 1pm"
    },
    {
      name:"Ajith",
      email:"ajith@gmail.com",
      mobile:"9876987532",
      batch:"B38WET",
      timings:"11am to 1pm"
    },
    {
      name:"Ganesh",
      email:"ganesh@gmail.com",
      mobile:"9876987532",
      batch:"B38WET",
      timings:"11am to 1pm"
    },
    {
      name:"Maheshwari",
      email:"maheshwari@gmail.com",
      mobile:"9876987532",
      batch:"B38WET",
      timings:"11am to 1pm"
    }
  ])
  return <div id="wrapper">
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard data={data} users={users} setUsers={setUsers}/>}/>
        <Route path='/add-user' element={<AddUser users={users} setUsers={setUsers}/>}/>
        <Route path='/edit-user/:id' element={<EditUser/>}/>
        <Route path='/nested-example' element={<NestedExample/>}>
            <Route path='account' element={<Account/>}/>
            <Route path='profile' element={<Profile/>}/>
        </Route>
        <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
