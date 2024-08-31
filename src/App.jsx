import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

import {Footer , Navbar} from '../src/components/index'

function App() {


  return (
    <>
    <Navbar/>
    <Outlet/>
   <Footer/>
    </>
  )
}

export default App
