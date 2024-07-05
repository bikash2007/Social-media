import React, { useContext } from 'react'
import { PostData } from '../store/PostListStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function Post({item}) {
  const{deletePost}=useContext(PostData)
  return (
    <div className='border border-blue-700 min-h-80 rounded-md p-6 w-80 lg:w-96 flex flex-col gap-2 items-center relative overflow-hidden'>
          <span onClick={()=>deletePost(item.id)} className='flex px-2 items-center justify-center  absolute top-0 right-0 text-red-600 hover:text-red-950 font-semibold'><FontAwesomeIcon icon={faTrash} /> </span>
        <h1 className='font-bold text-2xl  text-blue-600'>{item.title}</h1>
        <p className=' text-zinc-800'>{item.body}</p>
        <div className='flex gap-6'>

        {item.tags.map((tag)=>
        <button className='bg-green-600 p-1 px-3 mt-2 rounded-md text-white' key={tag}>{tag}</button>
      )}
      </div>
    </div>
  )
}

export default Post