import React from 'react'

function Contact() {
  return (
  <section className='pl-[250px] pt-5 max-[1070px]:pl-0'>
    <form action="" className='flex justify-center items-center flex-col mb-2'>
      <label htmlFor="" className='py-5 text-teal-300 font-bold'>User Name</label>
      <input className='py-5 px-60 rounded-full shadow focus:shadow-inshad outline-none max-lg:w-full max-lg:px-32' required type="text" name="" id=""  placeholder='Enter Your Name'/>
      <label htmlFor="" className='py-5 text-teal-300 font-bold'>User Email</label>
      <input className='py-5 px-60 rounded-full shadow focus:shadow-inshad outline-none max-lg:w-full max-lg:px-32' required type="email" name="" id=""  placeholder='Enter Your Email'/>
      <label htmlFor="" className='py-5 text-teal-300 font-bold'>User Number</label>
      <input className='py-5 px-60 rounded-full shadow focus:shadow-inshad outline-none max-lg:w-full max-lg:px-32' required type="number" name="" id=""  placeholder='Enter Your Number'/>
      <label htmlFor="" className='py-5 text-teal-300 font-bold'>User Query</label>
      <textarea className='py-5 px-60 rounded-lg shadow focus:shadow-inshad outline-none max-lg:w-full max-lg:px-3' required name="" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
      <button className='flex justify-center items-center px-7 py-3 border text-lg bg-teal-300 text-white rounded-full mt-3'>Submit</button>
    </form>
  </section>
  )
}

export default Contact
