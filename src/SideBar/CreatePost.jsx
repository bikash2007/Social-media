import React, { useCallback, useContext, useRef } from 'react'
import { PostData } from '../store/PostListStore'


function CreatePost() {
  const{addPost}=useContext(PostData)
  const tittle =useRef();
  const body =useRef();
  const tag = useRef();

  const submitHandler=()=>{
   event.preventDefault();
    const postTittle = tittle.current.value;
    const postBody = body.current.value;
    const postTag = tag.current.value.split(' ');
    addPost(postTittle,postBody,postTag);

  tittle.current.value='';
  body.current.value='';
    tag.current.value='';
  }

  return (
    <div className='flex justify-center  pt-10 w-full '>
        <form className='flex flex-col items-center gap-2 w-4/6 py-28 bg-green-950 px-12 rounded-md text-white font-semibold' onSubmit={submitHandler} >
              <label htmlFor="Tittle">Tittle</label>
              <input ref={tittle} type='text' placeholder='Post tittle' className='border-2 after:border-blue-600 w-full  h-14 rounded-md text-blue-600'/>
              <label> discribtion</label>
              <textarea ref={body} className='w-full border min-h-52 max-h-fitrounded-md text-black flex' ></textarea>
              <label>Tag</label>
              <input ref={tag} type="text" placeholder='#Enter the Hastag using space ' className='w-4/5 border h-14 rounded-md text-green-600'/>
              <button type='submit' className='mt-5 px-9 py-2 bg-blue-600 rounded-md'>POST</button>
               
        </form>
    </div>
  )
}

export default CreatePost