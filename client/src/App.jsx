import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import  Home  from "./pages/Home.jsx"
import Signin from "./pages/signin.jsx"
import Signup from "./pages/Signup.jsx"
import Profile from './pages/Profile.jsx'

import Header from "./components/Header.jsx"
import PrivateRoute from './components/PrivateRoute.jsx'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/signin" element={ <Signin />} />
          <Route path="/signup" element={ <Signup />}/>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />}/>
          </Route>
          <Route path="*" element={console.log("page not found")}/>

        </Routes>
      </Router>
    </>
  );
}

export default App