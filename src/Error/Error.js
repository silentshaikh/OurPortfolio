import React from 'react'
import {useNavigate} from 'react-router-dom';
function Error() {
  const portNavig = useNavigate();
  return (
   <section className='flex justify-center items-center flex-col h-screen pl-[250px] max-[1070px]:pl-0'>
    <h2 className='text-4xl text-teal-300'>404 Error</h2>
    <button className='flex justify-center items-center px-7 py-3 border text-lg bg-teal-300 text-white rounded-full mt-3' onClick={() => portNavig('/')}>Go Back</button>
   </section>
  )
}

export default Error;
