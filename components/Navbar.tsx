import React from 'react'
// import { colors } from '@/constants/Colors'

function Navbar() {
  return (
    <nav className='w-full justify-center items-center'>
        <ul className='flex space-x-6 justify-center items-center'>
            <li className='font-semibold cursor-pointer'>Home</li>
            <li className='font-semibold cursor-pointer'>Changelog</li>
            <li className='font-semibold cursor-pointer'>About</li>
        </ul>
    </nav>
  )
}

export default Navbar 