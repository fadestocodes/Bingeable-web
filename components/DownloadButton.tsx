'use client'

import { appStoreUrl } from '@/app/lib/appStoreUrl'
import React from 'react'
import { FaApple } from 'react-icons/fa6'
import { colors } from '@/constants/Colors'

const DownloadButton = () => {

    const handleClick = () => {
        window.open(appStoreUrl, '_blank');
    }

  return (
    <div onClick={handleClick} className="w-full  px-10 justify-self-center cursor-pointer justify-center items-center text-center font-semibold py-2  flex flex-row gap-1 z-10" style={{backgroundColor:colors.secondary, borderRadius:30 }}>
        <FaApple size={24} color={colors.primary} style={{paddingBottom:4}}/>
        <p>Download iOS App</p> 
    </div>
  )
}

export default DownloadButton