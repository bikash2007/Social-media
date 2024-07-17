import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import SideBar from './SideBar/SideBar'
import PostList from './SideBar/PostList'
import CreatePost from './SideBar/CreatePost'
import PostlistProvider from './store/PostListStore'
import { Outlet } from 'react-router-dom'

function App() {
  const [tab , setTab] = useState('Create-post')
  const [sideNav,setSideNav]= useState(true);
  return (
    <PostlistProvider>
 

   <div className=' flex overflow-hidden'>
    {sideNav && <div> <SideBar setSideNav={setSideNav} tab={tab} setTab={setTab}/> </div>}
     <div className='p-4 w-full overflow-scroll flex flex-col flex-wrap'>
       <Navbar setSideNav={setSideNav} sideNav={sideNav}/>
       <Outlet/>
       <Footer/>
     </div>
   </div>
 
    </PostlistProvider>
   
  )
}

export default App