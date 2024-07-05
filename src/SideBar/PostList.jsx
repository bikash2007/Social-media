import React, { useContext } from 'react'
import Post from './Post'
import { PostData } from '../store/PostListStore'
import WelcomeMassage from './WelcomeMassage'


function PostList() {
 const {postlist, fetchPosts}=useContext(PostData)
  const getPostHandler=()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data=> fetchPosts(data.posts));
  }
 
  return (
    <div className='flex flex-wrap gap-10 justify-center min-h-[600px] p-4 '>
      {postlist == 0 && <WelcomeMassage  getPostHandler={ getPostHandler}/>}
       {postlist.map((item)=>
        <Post item={item} key={item.id}/>)}
    </div>
  )
}

export default PostList