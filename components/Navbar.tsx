import { colors } from '@/constants/Colors'
import React from 'react'
// import { colors } from '@/constants/Colors'

function Navbar() {
  return (
    <nav className='w-full justify-center items-center'>
        <ul className='flex space-x-6 justify-center items-center'>
            <li className='font-semibold text-sm cursor-pointer text-white' style={{}}>Home</li>
            <li className='font-semibold text-sm cursor-pointer text-white' style={{}}>Changelog</li>
            <li className='font-semibold text-sm cursor-pointer text-white' style={{}}>About</li>
        </ul>
    </nav>
  )
}

export default Navbar 