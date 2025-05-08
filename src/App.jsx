import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';
import About from './pages/About';
import Contact from './pages/Contact';
import AppLayout from './components/Layout/AppLayout';


const router = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    children:[

      {
        path: "/",
        element: <Home />
      },
      {
        path: "country",
        element: <Country />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },

  
]);


function App() {


  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
