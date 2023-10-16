import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './Components/ScrollToTop'


function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulating a data fetching operation
    setTimeout(() => {
      setCount(1);
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <div className=''>
     
      <RouterProvider router={router}>
       <ScrollToTop >
        
       </ScrollToTop>
      </RouterProvider>
      <Toaster />
    </div>
  )
}

export default App
