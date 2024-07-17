import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
function Navbar({setSideNav,sideNav}) {
  const { loginWithRedirect }=useAuth0();
  return (
    <div className='w-full h-20  font-semibold text-xl  bg-gray-200  rounded-md  flex justify-between  items-center px-32  border-b'>
    <div>
        {!sideNav &&<span className=' hover:text-blue-600' onClick={()=>setSideNav(true)}>  <FontAwesomeIcon icon={faBars} />  </span> }
      
      </div>
           
           <div className='flex gap-14'>

             <NavLink to={'/about'} className={(e)=>{return e.isActive? 'text-blue-600':''}}>About</NavLink>
             <NavLink to={'/contact'} className={(e)=>{return e.isActive? 'text-blue-600':''}}>Contact</NavLink>
             <button onClick={()=>loginWithRedirect()} className='px-5 py-1 bg-blue-600 text-white rounded-2xl'>Log In</button>
           </div>
    </div>
  )
}

export default Navbar