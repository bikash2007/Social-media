import React, { useCallback, useContext, useRef } from 'react';
import { PostData } from '../store/PostListStore';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const { addPost } = useContext(PostData);
  const navigate = useNavigate();
  const titleRef = useRef();
  const bodyRef = useRef();
  const tagRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const postTitle = titleRef.current.value.trim();
    const postBody = bodyRef.current.value.trim();
    const postTag = tagRef.current.value.trim().split(' ').filter(tag => tag);

    if (postTitle && postBody && postTag.length > 0) {
      addPost(postTitle, postBody, postTag);

      // Clear input fields
      titleRef.current.value = '';
      bodyRef.current.value = '';
      tagRef.current.value = '';
      
      // Navigate to home
      navigate('/');
    } else {
      alert('Please fill in all fields with valid data.');
    }
  };

  return (
    <div className='flex justify-center pt-10 w-full'>
      <form className='flex flex-col items-center gap-2 w-4/6 py-28 bg-green-950 px-12 rounded-md text-white font-semibold' onSubmit={submitHandler}>
        <label htmlFor="Title">Title</label>
        <input ref={titleRef} type='text' placeholder='Post title' className='border-2 border-blue-600 w-full h-14 rounded-md text-blue-600'/>
        
        <label>Description</label>
        <textarea ref={bodyRef} placeholder='Post description' className='w-full border min-h-52 rounded-md text-black flex' ></textarea>
        
        <label>Tags</label>
        <input ref={tagRef} type="text" placeholder='#Enter the Hashtags using space ' className='w-4/5 border h-14 rounded-md text-green-600'/>
        
        <button type='submit' className='mt-5 px-9 py-2 bg-blue-600 rounded-md'>POST</button>
      </form>
    </div>
  );
}

export default CreatePost;
