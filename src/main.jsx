import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostList from './SideBar/PostList.jsx'
import CreatePost from './SideBar/CreatePost.jsx'
import Contact from './webpage/Contact.jsx'
import About from './webpage/About.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
const router = createBrowserRouter([
  {path:'/', element:<App/> ,
    children:[
    {path:'/', element:<PostList/>},
    {path:'/create-post', element:<CreatePost/>},
    {path:'/about',element:<About/>},
    {path:'/contact', element:<Contact/>}
  ],}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-q3ujch3wk8l70cz6.us.auth0.com"
    clientId="KvVcA3nYmMMPCB267vpl4hJNkcpeveyA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router}/>
    </Auth0Provider>,
)
