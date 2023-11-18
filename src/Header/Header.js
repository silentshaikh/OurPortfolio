import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'

function Header() {
  const [btnTogg,upBtnTogg] = useState(false);
  // const supply = {upBtnTogg}
  return (
    <>
    <header className={btnTogg ? 'fixed top-0 left-0 bg-white shadow z-head max-[1070px]:left-0 transition-all duration-1000' : 'fixed top-0 left-0 bg-white shadow z-head max-[1070px]:left-[-390px] transition-all duration-1000'}>
  <Navbar supp={upBtnTogg} sup={btnTogg}/>
    </header>
    </>
  )
}

export default Header
