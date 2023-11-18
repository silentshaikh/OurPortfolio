import React, { useEffect, useRef } from 'react'
import image from '../Snapchat-1599503129.jpg';
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import moizCv from '../moiz.pdf'
import Typed from 'typed.js';
function Home() {
    let typRef = useRef(null);
    useEffect(() => {
        let typed = new Typed(typRef.current, {
    strings: ["FRONT-END-DEVELOPER"],
    typeSpeed: 50,
    backSpeed:70,
      loop:{}
  });
return () => {
    typed.destroy()
}
    },[]);
    
  return (
    <section className='flex justify-center items-center flex-col h-screen pl-[250px] z-foot max-[1070px]:pl-0'>
    <div className="flex   p-2">
        <img className='w-72 h-72 rounded-full shadow-inshad p-3 ' src={image} alt="" />
    </div>
    <h1 className='text-[3.5rem] font-bold pt-2 max-[1070px]:text-[2.5rem]'>SHAIKH ABDUL MOIZ</h1>
        <div className="flex">
        <h3 className='text-4xl text-teal-400 font-bold pb-4 max-[1070px]:text-2xl' ref={typRef}></h3>
        </div>
        <a href={moizCv} target='_blank'><button className='shadow py-3 px-7 hover:text-teal-300 hover:shadow-inshad'>Download CV</button></a>
        <div className="flex mt-10 shadow py-3 px-8">
        <LuFacebook className='text-[2.6rem] text-teal-300 shadow ml-2 p-2 hover:shadow-inshad'/>
        <FaInstagram className='text-[2.6rem] text-teal-300 shadow ml-2 p-2 hover:shadow-inshad'/>
        <FaLinkedin className='text-[2.6rem] text-teal-300 shadow ml-2 p-2 hover:shadow-inshad'/>
        </div>
    </section>
  )
}

export default Home
