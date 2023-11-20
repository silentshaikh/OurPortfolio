import React from 'react'
import { NavLink } from 'react-router-dom';
import { VscListFilter } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
function Navbar({supp,sup}) {
  const navRout = [
    {
      lnk:'/',
      name:'Home',
    },
    {
      lnk:'/about',
      name:'About',
    },
    {
      lnk:'/skill',
      name:'Skill',
    },
    {
      lnk:'/project',
      name:'Project',
    },
    {
      lnk:'/contact',
      name:'Contact',
    },
  ]
  return (
    <nav className='flex justify-center items-center flex-col h-screen w-96 '>
    <div className="fixed top-2 left-3">
    {sup ? <MdClose onClick={() => supp(false)} className='text-[3.2rem] cursor-pointer hover:shadow-inshad rounded-full text-teal-300 shadow p-1 hidden max-[1070px]:block max-[1070px]:text-[3.3rem] z-togg bg-white'/> :<VscListFilter onClick={() => supp(true)} className='text-[3.2rem] cursor-pointer hover:shadow-inshad rounded-full text-teal-300 shadow p-1 hidden max-[1070px]:block max-[1070px]:text-[3.3rem] z-togg bg-white'/>}
    </div>
    <div  className="flex w-64 h-64 justify-center items-center flex-col rounded-full shadow-inshad bg-teal-400">
    <h1 className='text-[2.5rem] uppercase font-bold text-teal-300 font-cherry'>Our</h1>
    <h1 className='text-[2.5rem] uppercase font-bold text-teal-300 font-cherry'>Portfolio</h1>
    </div>
      <ul className='pt-5'>
        {
          navRout.map((element,index) => {
            return(
              <NavLink key={index} onClick={() => supp(false)} to={element.lnk}><li className='shadow  py-4 px-28 text-teal-300 rounded-full mb-3 hover:shadow-inshad active:bg-teal-300 active:text-white'>{element.name}</li></NavLink>
            );
          })
        }
      </ul>
    </nav>
  )
}

export default Navbar
