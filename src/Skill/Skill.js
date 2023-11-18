import React from 'react'
import SImg from '../721af4a898856cda8e464cdbff8d854f.jpg';
function Skill() {
  return (
    <>
    <h1 className='text-4xl pl-[370px] text-center pt-10 pb-14 font-bold text-teal-300 max-[1070px]:pl-0'>SKILL</h1>
    <section className='flex justify-evenly items-center  mb-8 pl-[370px] max-[1070px]:pl-0 max-[646px]:flex-col '>
      <div className="flex">
        <img className='w-[25vw] rounded-md max-[1070px]:w-[32vw] max-[714px]:w-[40vw] max-[646px]:w-[44vw] max-[467px]:w-[57vw]' src={SImg} alt="skill" />
      </div>
      <div className="flex flex-col mb-3 max[646px]:w-[70vw] max-[646px]:pt-7">
        <div className="flex flex-col">
          <h1 className='pb-2 text-orange-400 font-bold'>HTML</h1>
          <div className="relative w-[30vw] shadow-inshad p-2 h-10 rounded-full max-[646px]:w-[60vw]">
          <span className="absolute top-1 w-[26vw]  h-8 rounded-full bg-orange-400 max-[646px]:w-[53vw]">
          </span>
          </div>
          </div>
          <div className="flex flex-col pt-3">
          <h1 className='pb-2 text-blue-400 font-bold'>CSS</h1>
          <div className="relative w-[30vw] shadow-inshad p-2 h-10 rounded-full max-[646px]:w-[60vw]">
          <span className="absolute top-1 w-[20vw] h-8 rounded-full bg-blue-400 max-[646px]:w-[41vw]">
          </span>
          </div>
          </div>
          <div className="flex flex-col pt-3">
          <h1 className='pb-2 text-yellow-200 font-bold'>JAVASCRIPT</h1>
          <div className="relative w-[30vw] shadow-inshad p-2 h-10 rounded-full max-[646px]:w-[60vw]">
          <span className="absolute top-1 w-[18vw] h-8 rounded-full bg-yellow-200 max-[646px]:w-[36vw]">
          </span>
          </div>
          </div>
          <div className="flex flex-col pt-3">
          <h1 className='pb-2 text-teal-300 font-bold'>TAILWIND CSS</h1>
          <div className="relative w-[30vw] shadow-inshad p-2 h-10 rounded-full max-[646px]:w-[60vw]">
          <span className="absolute top-1 w-[20vw] h-8 rounded-full bg-teal-300 max-[646px]:w-[41vw]">
          </span>
          </div>
          </div>
          <div className="flex flex-col pt-3">
          <h1 className='pb-2 text-cyan-300 font-bold'>REACT JS</h1>
          <div className="relative w-[30vw] shadow-inshad p-2 h-10 rounded-full max-[646px]:w-[60vw]">
          <span className="absolute top-1 w-[15vw] h-8 rounded-full bg-cyan-300 max-[646px]:w-[33vw]">
          </span>
          </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Skill
