'use client'

import React from 'react'
import Image from 'next/image'
import { colors } from '@/constants/Colors'
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { posterURLlow } from '@/constants/tmdbPosterUrl'
import { MdOutlineMessage } from 'react-icons/md'
import { FaRetweet } from "react-icons/fa6";
import { formatDate } from '@/app/lib/formatDate'

const DialogueCarousel = ({dialogues}) => {

  return (
    <div className='w-full h-auto flex flex-row gap-3 items-start overflow-hidden  '>
         <div className="flex flex-row items-start gap-5 w-max animate-scroll-left"
                style={{
                animation: 'scrollLeft 70s linear infinite',
                }}>
        { dialogues.map( dialogue => (

            <div key={dialogue.id} className='flex flex-col justify-between items-center py-4 px-6 gap-3  overflow-hidden  ' style={{ minWidth:400, borderRadius:15, backgroundColor:colors.mainGrayDark}}>
                <div className='w-full flex flex-col gap-3'>
                    <div className='flex flex-row w-full  justify-between items-center ' style={{}} >
                        <div className='flex flex-row gap-2 items-center  '>
                            <div className="w-[30px] h-[30px] relative rounded-full overflow-hidden">
                                <Image
                                    src={dialogue.user.profilePic}
                               fill={true}
                               objectFit='cover'
                                    alt='user profile picture'
                                    className='object-cover'
                                    style={{ overflow:'hidden'}}
                                />
                            </div>
                            <p className='text-sm' style={{color:colors.mainGray}}>@{dialogue.user.username}</p>
                        </div>
                        <p className='text-sm' style={{color:colors.mainGray}}>{formatDate(dialogue.createdAt)}</p>
                    
                    </div>
                    <div className='w-full justify-center items-center pt-8 gap-3'>
                        <p className='courier justify-self-center text-sm' style={{  color:colors.secondary}}>{dialogue.user.firstName}</p>
                        <p className='courier text-white justify-self-center text-sm' style={{}}>{dialogue.content}</p>
                    </div>
                    { dialogue.image && (
                        <div className='w-full h-full relative justify-center items-center'>
                            <Image 
                                src={dialogue.image}
                                width={400}
                                height={400}
                                alt='picture from user post'
                                style={{borderRadius:15, height:200, objectFit:'cover'}}
                            />
                        </div>
                    ) }
                </div>
                { dialogue.mentions && (
                    <div className='w-full justify-start flex flex-row gap-2 pt-4'>
                        { dialogue.mentions.map( mention => (
                            <div key={mention.id}>
                                <Image
                                    src={`${posterURLlow}/${mention?.movie?.posterPath || mention?.tv?.posterPath}`}
                                    alt='poster for mentioned movie or tv show'
                                    height={80}
                                    width={35}
                                    style={{borderRadius:5}}
                                />
                            </div>

                        ) ) }
                    </div>
                ) }
                <div className='w-full flex flex-row  bottom-4 gap-6 justify-start items-center'>
                    <div className='flex flex-row gap-1 justify-center items-center'>
                        <ThumbsUp size={18} color={colors.mainGray} />
                        <p className='text-sm font-medium' style={{color:colors.mainGray}}>{dialogue.upvotes}</p>
                    </div>
                    <div className='flex flex-row gap-1 justify-center items-center'>
                        <ThumbsDown size={18} color={colors.mainGray} />
                        <p className='text-sm font-medium' style={{color:colors.mainGray}}>{dialogue.downvotes}</p>
                    </div>
                    <div className='flex flex-row gap-1 justify-center items-center'>
                        <MdOutlineMessage size={18} color={colors.mainGray} />
                        <p className='text-sm font-medium' style={{color:colors.mainGray}}>{dialogue.comments.length}</p>
                    </div>
                    <div className='flex flex-row gap-1 justify-center items-center'>
                        <FaRetweet size={18} color={colors.mainGray} />
                        <p className='text-sm font-medium' style={{color:colors.mainGray}}>{dialogue.downvotes}</p>
                    </div>

                </div>
            </div>
        ) ) }
        </div>
    </div>
  )
}

export default DialogueCarousel