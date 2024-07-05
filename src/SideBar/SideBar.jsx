import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function SideBar({tab,setSideNav,setTab}) {
  return (
    <div className=' h-full min-w-20 w-60 relative bg-green-950 text-white flex flex-col items-center pt-80 gap-4 font-semibold px-1'>
     <span className='absolute top-5 right-5 hover:text-blue-600' onClick={()=>setSideNav(false)}>  <FontAwesomeIcon icon={faBars} />  </span> 
             <button onClick={()=>setTab('home')} className={`w-full h-12 rounded-md ${tab==='home'? 'bg-blue-500':""}`}>Home</button>
             <button onClick={()=>setTab('Create-post')} className={`w-full h-12 rounded-md ${tab==='Create-post'? 'bg-blue-500':""}`}>Create post</button>
    </div>
  )
}

export default SideBar