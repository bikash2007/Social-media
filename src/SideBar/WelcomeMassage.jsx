import React from 'react'

function WelcomeMassage({ getPostHandler}) {
  return (
    <>
    <div className='w-full h-full flex flex-col justify-center items-center gap-2'>

    <h1 className='font-bold font-serif text-2xl'>There is no post </h1>
    <button className='px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md' onClick={ getPostHandler}>Fetch data from server</button>
    </div>
    </>
  )
}

export default WelcomeMassage