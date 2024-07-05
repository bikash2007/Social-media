import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Navbar({setSideNav,sideNav}) {
  return (
    <div className='w-full h-20  font-semibold text-xl text-green-800 bg-blue-200   flex justify-between  items-center px-32  border-b'>
     {!sideNav &&<span className=' hover:text-blue-600' onClick={()=>setSideNav(true)}>  <FontAwesomeIcon icon={faBars} />  </span> }
           
           <div className='flex gap-14'>

             <h1>Home</h1>
             <h1>About </h1>
             <h1>Contact</h1>
           </div>
    </div>
  )
}

export default Navbar