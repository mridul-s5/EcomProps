import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = (props) => {
    const [showSidebar, setshowSidebar] = useState(false);
  return (
   <div className='fixed top-0 w-full z-50 left-0 right-0  bg-black h-[65px]  items-center flex'>
     <div className='relative w-full flex justify-between items-center px-16 text-white'>
        
        <h3 className='font-semibold text-2xl'><Link className='' to={'/'}>Ecom-Shop</Link></h3>

        <ul className='hidden gap-8  items-center md:flex'>
            <li className='text-md  li'><Link to={'/'}>Home</Link></li>
            <li className='text-md  li'><Link>About</Link></li>
            <li className='text-md '><Link to={'/cart'} className='flex items-center gap-1'><BsCart3 size={25}/> <sup>{props.cartItem.length}</sup></Link></li>
            <li className='text-sm hover:bg-blue-500 bg-blue-600 rounded-md px-4 py-2'><Link>Login</Link></li>
            <li className='text-sm hover:bg-amber-500 bg-amber-600 rounded-md px-4 py-2'><Link>Signup</Link></li>
        </ul>

   { showSidebar &&    <ul className='flex flex-col px-16 py-4 sidebar1 top-0 gap-8 bg-black h-screen fixed items-center md:hidden'>
        <h3 className='font-semibold text-2xl'>Ecom-Shop</h3>
            <li className='text-lg border-b'><Link to={'/'}>Home</Link></li>
            <li className='text-lg border-b'><Link>About</Link></li>
            <li className='text-lg '><Link to={'/cart'} className='flex items-center gap-1'><BsCart3 size={25}/> <sup>{props.cartItem.length}</sup></Link></li>
            <li className='text-sm hover:bg-blue-500 bg-blue-600 rounded-md px-4 py-2'><Link>Login</Link></li>
            <li className='text-sm hover:bg-amber-500 bg-amber-600 rounded-md px-4 py-2'><Link>Signup</Link></li>
        </ul>}

        <div onClick={()=>setshowSidebar(!showSidebar)} className='md:hidden block'>
        <RiMenu3Fill size={26}/>
        </div>

    </div>
   </div>
  )
}

export default Navbar
