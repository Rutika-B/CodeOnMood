import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,RouterProvider,Route,createRoutesFromElements,createBrowserRouter, Routes } from 'react-router-dom' 
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/AboutUs.jsx'
import Contact from './Components/ContactUs.jsx'
import User from './Components/User.jsx'
import Github, { githubLoader } from './Components/Github.jsx'
import CodingProfile, { chartLoader } from './Components/CodingProfile.jsx'

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"Contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      {/* <Route path='Coding-profile' element={<CodingProfile/>}/> */}
      <Route loader={chartLoader} path='Coding-profile' element={<CodingProfile/>}/>
      <Route path='user/:userid' element={<User/>}/>
      {/* //-------------------------Method1-------------------------------------------------- */}

      {/* <Route path='Github' element={<Github/>}/> */}

      {/* //---------------------------Method 2 ----------------------------------------- */}

      <Route loader={githubLoader} path='Github' element={<Github/>}/>
      {/* loader for optimization(whenerver cursor goes on github option loader start fetching api n keep it in cache so that once user click on the Github option it will be available immediagately) */}
      
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
