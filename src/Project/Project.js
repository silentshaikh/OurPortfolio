import React from 'react'
import { projectApiCss, projectApiJs,projectApiTailReact,projectApiReact } from './apiProject';
function Project() {
  return (
    <section className="flex justify-center items-center flex-col pl-[400px] pt-10 mb-5 max-[1070px]:pl-0">
    <div className="flex flex-col">
      <h1 className='text-teal-300 font-bold text-4xl pb-6 underline'>HTML AND CSS</h1>
    </div>
    <div className='flex justify-center items-center flex-wrap max-[1070px]:px-2'>
      {projectApiCss.map((element,index) => {
        return(
          <div className="p-20 shadow w-[30vw] h-[35vh] mb-3 m-auto border max-[1070px]:w-[45vw] max-[660px]:w-[48vw] max-[586px]:w-[80vw]" key={index}>
        <h1 className='text-3xl font-bold pb-2'>{element.head}</h1>
        <a href={element.lnk} target='_blank' className='text-teal-400'>Click Here</a>
      </div>
        );
      })}
    </div>
    <div className="flex flex-col">
      <h1 className='text-teal-300 font-bold text-4xl pb-6 pt-5 underline max-[1070px]:px-2'>JAVASCRIPT</h1>
    </div>
    <div className='flex justify-center items-center flex-wrap'>
      {projectApiJs.map((element,index) => {
        return(
          <div className="p-20 shadow w-[30vw] h-[35vh] mb-3 m-auto border max-[1070px]:w-[45vw] max-[660px]:w-[48vw] max-[586px]:w-[80vw]" key={index}>
        <h1 className='text-3xl font-bold pb-2'>{element.head}</h1>
        <a href={element.lnl} target='_blank' className='text-teal-400'>Click Here</a>
      </div>
        );
      })}
    </div>
    <div className="flex flex-col">
      <h1 className='text-teal-300 font-bold text-4xl pb-6 pt-5 underline max-[1070px]:px-2'>REACT JS</h1>
    </div>
    <div className='flex justify-center items-center flex-wrap'>
      {projectApiReact.map((element,index) => {
        return(
          <div className="p-20 shadow w-[30vw] h-[35vh] mb-3 m-auto border max-[1070px]:w-[45vw] max-[660px]:w-[48vw] max-[586px]:w-[80vw]" key={index}>
        <h1 className='text-3xl font-bold pb-2'>{element.head}</h1>
        <a href={element.lnl} target='_blank' className='text-teal-400'>Click Here</a>
      </div>
        );
      })}
    </div>
    <div className="flex flex-col">
      <h1 className='text-teal-300 font-bold text-4xl pb-6 pt-5 underline max-[1070px]:px-2'>REACT JS AND TAILWIND CSS</h1>
    </div>
    <div className='flex justify-center items-center flex-wrap'>
      {projectApiTailReact.map((element,index) => {
        return(
          <div className="p-20 shadow w-[30vw] h-[35vh] mb-3 m-auto border max-[1070px]:w-[45vw] max-[660px]:w-[48vw] max-[586px]:w-[80vw]" key={index}>
        <h1 className='text-3xl font-bold pb-2'>{element.head}</h1>
        <a href={element.lnl} target='_blank' className='text-teal-400'>Click Here</a>
      </div>
        );
      })}
    </div>
    </section>
  )
}

export default Project
