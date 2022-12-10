import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import NestedExample from './components/NestedExample';
import Account from './components/NestedComponents/Account'
import Profile from './components/NestedComponents/Profile'
import UserContextComponent from './components/ContextComponent/UserContextComponent';
import DashboardContextComponent from './components/ContextComponent/DashboardContextComponent';
import UseRef from './components/NestedComponents/UseRef';
import UseReducer from './components/NestedComponents/UseReducer';
import Todo from './components/Todo';
import AddUsers from './components/CRUDComponents/AddUsers';
import AllUsers from './components/CRUDComponents/AllUsers';

export default function App() {
  return <div id="wrapper">
    <UserContextComponent>
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={
          <DashboardContextComponent>
              <Dashboard/>
          </DashboardContextComponent>}/>
        <Route path='/add-user' element={
            <AddUser />}/>
        <Route path='/edit-user/:id' element={
            <EditUser/>}/>

        <Route path='/nested-example' element={<NestedExample/>}>
            <Route path='account' element={<Account/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='use-ref' element={<UseRef/>}/>
            <Route path='use-reducer' element={<UseReducer/>}/>
        </Route>

        <Route path='/todo' element={<Todo/>}/>
        <Route path='/add-users' element={<AddUsers />}/>
        <Route path='/add-users/:id' element={<AddUsers/>}/>
        <Route path='/all-users' element={<AllUsers />}/>
        <Route path='*' element={<Navigate to={'/dashboard'}/>}/>

      </Routes>
    </BrowserRouter>
    </UserContextComponent>
  </div>
}
