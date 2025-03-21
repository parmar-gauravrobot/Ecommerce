import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UsersList from './UsersList';
import Dashboard from './Dashboard';

function Admin() {
  return (
    < div style={{marginTop:"0px", paddingTop:"0px"}}>

    <Routes>
    <Route path="/admin/getallusers" element={<UsersList/>}></Route>
    <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
    </Routes>
      
    </div>
  )
}

export default Admin;
