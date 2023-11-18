import React from 'react'
import aImg from '../a.m.png'
function About() {
  return (
    <section className='flex justify-start items-center pt-5 flex-col pb-5 pl-[300px] max-[1070px]:pl-0'>
      <div className="flex justify-center items-center flex-wrap">
      <div className="flex justify-center items-start flex-col max-[671px]:pt-16">
      <h1 className='text-teal-300 text-3xl font-bold pb-4 '>Assalam-O-Alikum,</h1>
        <p className='max-w-lg '>I Am <strong className='text-teal-300'>Shaikh Abdul Moiz</strong>, A Fresh Front -End - Developer I Am Passionate About My Work And Specialize In Creative Designs. I Love To Make Modern And Trending Designs That Will Match The Latest Trend. I Always Focus On Client Satisfaction. Feel Free To Discuss Your Next Project With Me Thanks</p>
      </div>
        <div className="flex ">
          <img className='w-72 rounded-full shadow-inshad p-3 max-[799px]:mt-3' src={aImg} alt="about" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col pt-14">
        <h1 className='text-4xl font-bold shadow-inshad py-3 px-8 text-teal-300'>EDUCATION</h1>
        <div className="flex justify-center items-center flex-wrap pt-9">
          <div className="flex justify-center items-start flex-col shadow p-3 max-[799px]:mb-3">
            <h1 className='font-bold text-xl pb-2'>MATRICULATION</h1>
            <p><strong className='text-teal-300'>School: </strong>CMS Govt Higher Secondary Campus School</p>
            <p><strong className='text-teal-300'>Passing Year: </strong>2021</p>
          </div>
          <div className="flex justify-center items-start flex-col shadow p-3 ml-3 max-[799px]:mb-3">
            <h1 className='font-bold text-xl pb-2'>INTERMEDIATE</h1>
            <p><strong className='text-teal-300'>College: </strong>Sindh Muslim Govt Science College</p>
            <p>Inprocess</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
