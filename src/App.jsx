import React from 'react'
import { BrowserRouter, Routes,Route  } from 'react-router-dom'
import HomeLayout from './Components/HomePage/HomeLayout'
// import CheckEmail from './Components/LoginAndRegisterPage/CheckEmail'
// import Register from './Components/LoginAndRegisterPage/Register'
// import ForgetPassword from './Components/LoginAndRegisterPage/ForgetPassword'
import Login from './Components/LoginAndRegisterPage/Login'

function App() {


  return (
    <>
    <HomeLayout/>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    {/* <Login/> */}
    {/* <ForgetPassword/> */}
    {/* <CheckEmail/> */}
    {/* <Register/> */}
    </>
  )
}

export default App
