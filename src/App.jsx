import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'
import { Toaster } from 'react-hot-toast';


function App() {


  return (
    <div className=''>
     
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  )
}

export default App
