'use client'

import { User } from '@/app/types'
import React from 'react'
import Image from 'next/image'
import { colors } from '@/constants/Colors'
import { posterURL } from '@/constants/tmdbPosterUrl'
import { avatarFallback, posterFallback } from '@/app/lib/fallbackImages'

type UserCarouselProps = {
    usersList: User[] | null;
  };

const UserCarousel = ({ usersList }: UserCarouselProps) => {

        
    return (
        <div className='flex-row flex gap-5 w-full overflow-hidden  h-full relative '>
            <div className="flex gap-5 w-max animate-scroll-left justify-center items-center"
                style={{
                animation: 'scrollLeft 70s linear infinite',
                }}>
            { usersList?.map( user => (
                <div key={user.id} style={{  width:'100%', borderRadius:15, justifyContent:'center', alignItems:'center'}} >
                    <div className="relative w-[180px] max-h-[320px] overflow-hidden  " style={{ borderRadius:20, backgroundColor:colors.mainGrayDark }}>
                        {/* Background Image */}
                        <div className='relative flex flex-col justify-center items-center  overflow-hidden py-10 gap-3 w-full  '>
                            <div className='' style={{height:60, width:60, borderRadius:50, paddingBottom:10, position:'relative', justifySelf:'center'}}>
                                <Image
                                    src={user?.profilePic ? user.profilePic : avatarFallback}
                                    alt="Header Image"
                                    fill = {true}

                                    // width={60}
                                    // height={60}
                                    style={{zIndex:0, objectFit:'cover'}}
                                    className="  rounded-full   "
                                    />
                            </div>

                            {/* Overlay Gradient */}
                            {/* <div
                            className="absolute bottom-0 left-0 w-full h-[450px] rounded-[15px] overflow-hidden"
                            style={{
                                background: `linear-gradient(to bottom, transparent 20%, #171717 55%, #171717 100%)`,
                                zIndex: 0,
                            }}
                            /> */}
                            <section className=''>
                                <div style={{zIndex:20}} className="relative z-20  text-white justify-center items-center w-full h-full ">
                                    <h1 className="font-extrabold text-xs  text-center pt-2" style={{color:colors.secondary}}>{user.firstName} {user.lastName}</h1>
                                    <p className='text-center text-xs font-bold' style={{fontSize:9}}>@{user.username}</p>
                                    { user.bio && (
                                        <p className='px-6 pt-2 justify-self-center  text-center font-mono ' style={{fontSize:9.5, lineHeight:1.2}}>{user.bio}</p>
                                    ) }
                                    {/* Add any other components here */}
                                </div>
                                <div className='gap-3 flex flex-col justify-center items-center pt-4 '>

                                    <p className='z-20 text-xs font-bold' style={{color:colors.mainGray}}>Current Rotation</p>
                                    <div className=' gap-2 flex flex-row  justify-center items-center'>
                                        { user?.currentRotation?.map( rotation => {
                                              const imageUrl = rotation?.movie?.posterPath || rotation?.tv?.posterPath
                                              ?  `${posterURL}/${rotation?.movie?.posterPath || rotation?.tv?.posterPath}`
                                              : posterFallback ; // Make sure this exists in your /public folder
                                            return (
                                            <div key={rotation.id} className='z-20 ' style={{borderRadius:5 , overflow:'hidden'}}>
                                            
                                                    <Image
                                                        width={25}
                                                        height={80}
                                                        src={imageUrl}
                                                        alt='movie poster'
                                                    />

                                             
                                            </div>
                                        ) }) }
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Content on top */}
                    </div>


                </div>
            ) ) }
            </div>
        </div>
    )
}

export default UserCarousel