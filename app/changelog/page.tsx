import React from 'react'
import Image from 'next/image'
import { changelogList } from '../lib/changelog'
import { colors } from '@/constants/Colors'

const ChangelogPage = () => {

  return (
    <div className=' relative w-full min-h-[1300px] flex flex-col justify-start items-center'>
        <div className='w-full h-[1000px] absolute top-0'>
            <Image
                src={'/heroimage2.jpg'}
                fill={true}
                alt='hero image'
                className='object-cover  '
            />
        </div>
        <div className='w-full h-[1000px] bg-black absolute  top-0 opacity-70 z-10' />
        <div
            className="absolute top-0 left-0 w-full h-[1000px]  overflow-hidden z-10"
            style={{
                background: `linear-gradient(to bottom, transparent 0%, transparent 60%,   #171717 100%)`
            }}
        />
        <section className='relative top-40 z-30  justify-center items-center  gap-5 flex flex-col pb-40 px-20 w-full'>
            <div className='flex flex-col  gap-5 justify-center items-center w-[100%] md:w-[60%] lg:w-[30%]'>
                <h1 className='text-white text-3xl font-bold z-10 '>Changelog</h1>
                <h1 className='text-white  font-normal z-10  justify-self-center '>We serve to make a better user experience for you. Check out our progress over the version updates.</h1>
            </div>
            <section className='z-10 pt-10 '>
                { changelogList.map( version => (
                    <div key={version.version} style={{color:colors.mainGray}} className='w-full flex py-10  flex-col justify-center items-center text-xl font-bold'>
                        <div className='w-full flex-row flex justify-between items-center pb-4'>
                            <p className='font-normal text-sm' style={{color:colors.mainGray}}>Version {version.version}</p>
                            <p className='font-normal text-sm' style={{color:colors.mainGray}}>{version.releaseDate}</p>
                        </div>
                        { version.changes.map( (change, index) => (
                            <div key={index} className='w-full justify-start items-center'>
                                <p className='text-sm font-normal courier' style={{color:colors.mainGray}}>- {change}</p>
                            </div>
                        ) ) }
                    </div>
                ) ) }
            </section>
        </section>
        
    </div>
  )
}

export default ChangelogPage