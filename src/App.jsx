import React from 'react'

import { Switch,Route } from 'react-router-dom'
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import About from "./components/pages/About"
import error from "./components/pages/Error"
import Navbar from "./components/layout/Navbar"
import AddUser from "./components/users/AddUser"
import EditUser from "./components/users/EditUser"
import User from "./components/users/User"

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/contact" component = {Contact}/>
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={User} />
        <Route component = {error}/>
      </Switch>
    </>
  )
}

export default App
