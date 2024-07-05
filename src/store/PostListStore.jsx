import { createContext, useReducer } from "react";

 export const PostData = createContext({
    postlist:[],
    addPost:()=>{},
    fetchPosts:()=>{},
    deletePost: ()=>{},
})
 const postlistReducer=(currPost,action)=>{
 let newPostlist =currPost;
  if(action.type ==="Delete_post"){
    newPostlist= currPost.filter((post)=>post.id !== action.payload.id)
  }
  else if(action.type ==="Fetch_posts" ){
         newPostlist =action.payload.posts
  }
  else if(action.type ==="Add_post"){
    newPostlist = [action.payload,...currPost]
  }
  return newPostlist;
 }

const PostlistProvider =({children})=>{
   const [postlist,dispatchPost]= useReducer(postlistReducer,[]);
    const  addPost=(postTittle,postBody,postTag)=>{
        dispatchPost({
          type:"Add_post",
          payload:{
            id:Date.now(),
          title:postTittle,
          body:postBody,
          tags:postTag
          }
        })
      }
    const  fetchPosts=(posts)=>{
        dispatchPost({
          type:"Fetch_posts",
          payload:{
            posts
          }
        })
      }
    const  deletePost=(id)=>{
         dispatchPost({
          type:"Delete_post",
          payload:{
             id
          }
         })
      }
    
    return (
   <PostData.Provider value={{postlist,addPost,deletePost, fetchPosts}}>{children} </PostData.Provider>
    )
};

export default PostlistProvider;