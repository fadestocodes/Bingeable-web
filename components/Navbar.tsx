
'use client';

import { colors } from '@/constants/Colors'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function Navbar() {
    const router = useRouter()

    const handleLogo = () => {
        router.push('/')
    }

  return (
    <div className='w-full relative justify-center items-center'>    
    <Image
        onClick={handleLogo}
        src={'/bingeable-logo.png'}
        width={50}
        height={50}
        alt='Bingeable logo'
        className='absolute -top-3 left-5 lg:left-15 z-40 cursor-pointer'
    />
        <nav className='w-full relative justify-center items-center'>
        
            <ul className='flex space-x-6 justify-center items-center'>

                <li className='font-semibold text-sm cursor-pointer text-white' style={{}}>
                    <Link href={`/`}>Home</Link>
                </li>
                <li className='font-semibold text-sm cursor-pointer text-white' style={{}}>
                    <Link href={`/changelog`}>Changelog</Link>
                </li>
               
            </ul>
        </nav>
    </div>
  )
}

export default Navbar 