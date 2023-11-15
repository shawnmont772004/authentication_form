import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import  Home  from "./pages/Home.jsx"
import Signin from "./pages/signin.jsx"
import Signup from "./pages/Signup.jsx"

import Header from "./components/Header.jsx"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/signin" element={ <Signin />} />
          <Route path="/signup" element={ <Signup />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App