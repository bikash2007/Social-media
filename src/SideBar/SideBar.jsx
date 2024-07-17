import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
function SideBar({tab,setSideNav,setTab}) {
  return (
    <div className=' h-full min-w-20 w-60 relative bg-green-950 text-white flex flex-col items-center pt-80 gap-4 font-semibold px-1'>
     <span className='absolute top-5 right-5 hover:text-blue-600' onClick={()=>setSideNav(false)}>  <FontAwesomeIcon icon={faBars} />  </span> 
            <NavLink to={"/"}> <button className={`w-full h-12 rounded-md `}>Home</button></NavLink>
             <NavLink to={'/create-post'}  ><button  className={`w-full h-12 rounded-md `}>Create post</button></NavLink>
    </div>
  )
}

export default SideBar