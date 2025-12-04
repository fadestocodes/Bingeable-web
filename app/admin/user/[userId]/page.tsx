'use client'

import { avatarFallback } from '@/app/lib/fallbackImages'
import { formatDateTimeWords, formatDateWords } from '@/app/lib/formatDate'
import { useGetSingleUser } from '@/app/lib/hooks'
import { Spinner } from '@/components/ui/spinner'
import { colors } from '@/constants/Colors'
import { Link, MapPin } from 'lucide-react'
import Image from 'next/image'
import React, { use } from 'react'

 function UserAdminPage({
    params,
  }: {
    params: Promise<{ userId: string }>
  }) {

    const { userId } = use(params)

    const {data: user} = useGetSingleUser(userId )

    if (!user ) return <Spinner />
  return (
    <div className=' flex-1 flex-col flex pt-30 min-h-[500px] px-50 gap-20'>
        <div className='w-full relative flex justify-center items-center'>
           
            <div className='bg-mainGrayDark px-20 py-10  flex-col w-max rounded-2xl justify-center items-center'>
                <div className='flex flex-col gap-3  justify-center items-center'>
                    <Image
                        src={user?.profilePic || avatarFallback}
                        width={75}
                        height={75}
                        unoptimized
                        style={{borderRadius:50}}
                        alt="user profile picture"
                    />
                    <div className='flex flex-col gap-1 justify-center items-start  pb-4'>
                        <h2 className='text-mainGray font-bold text-xl' >{user.firstName}{user?.lastName && ` ${user.lastName}`}</h2>
                        <p className='text-mainGray'>@{user.username}</p>
                    </div>
                    { user?.bio && (
                        <div className='flex flex-col gap-1 justify-center items-start '>
                            <h2 style={{color:colors.mainGrayLight}} className=' courier ' >{user.bio}</h2>
                        </div>
                    ) }
                    { user?.locationFormatted && (
                        <div className='flex flex-row gap-1 justify-center items-center'>
                            <MapPin size={16} color={colors.newLightGray} />
                            <h2 className='text-mainGray  ' >{user.locationFormatted}</h2>
                        </div>
                    )}
                    { user?.bioLink && (
                        <div  className='flex flex-row gap-2'>
                            <Link size={16} color={colors.newLightGray}/>
                            <p className='text-mainGray text-md'>{user.bioLink}</p>
                        </div>
                        )}
                        <div className='flex flex-row gap-2 justify-center items-center'>
                            <div  className='flex flex-row gap-2 justify-center items-center'>
                                <p className='text-mainGray text-md font-bold'>{ user?.followers && user.followers.length }</p>
                                <p className='text-mainGray text-md font-bold'>{ user?.followers &&  user.followers.length > 0 ? 'Follower' :  'Followers'}</p>
                            </div>
                            <div  className='flex flex-row gap-2 justify-center items-center'>
                                <p className='text-mainGray text-md font-bold'>{ user?.following && user.following.length }</p>
                                <p className='text-mainGray text-md font-bold'>{ 'Following'}</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <div className='w-full flex items-center self-center relative  justify-center'>
            <div style={{backgroundColor:colors.primaryDark}}  className='w-full  absolute -top-12 h-[100px] pt-4 px-6  rounded-t-2xl -z-1 '>
                <p className='text-mainGray font-bold opacity-70'>Sessions</p>
            </div>
            <div className='bg-mainGrayDark px-20 py-10 grid grid-cols-4  flex-col w-full rounded-2xl justify-center items-center gap-3'>
                <div  className='grid grid-cols-4 col-span-4 py-3 px-6 rounded-xl 
                    bg-primary opacity-50 justify-center items-center w-full'>
                        <p className='text-mainGray col-span-3'>Session Start</p>
                        <p className='text-mainGray col-span-1'>Location</p>
                </div>
                { user?.session &&  user?.session?.length > 0 && 
                
                (
                    user.session.map( session => {
                            console.log('seswions..', session)
                        return (
                        <div key={session.id} className='col-span-4 grid grid-cols-4 px-4'>
                            <p className='text-mainGray col-span-3'>{formatDateTimeWords(session.createdAt)}</p>
                            <p className='text-mainGray col-span-1'>N/A</p>
                        </div>
                    ) })
                ) }

            </div>
        </div>

        <div className='w-full relative  justify-center'>
            <div style={{backgroundColor:colors.primaryDark}}  className='w-full  absolute -top-12 h-[100px] pt-4 px-6  rounded-t-2xl -z-1 '>
                <p className='text-mainGray font-bold opacity-70'>Recent Activities</p>
            </div>
            <div className='bg-mainGrayDark px-20 py-10  flex-col w-full rounded-2xl justify-center items-center grid grid-cols-5 col-span-5 gap-5'>
                <div  className='grid grid-cols-5 col-span-5 py-3 px-6 rounded-xl 
                    bg-primary opacity-50 justify-center items-center w-full'>
                        <p className='text-mainGray col-span-4'>Description</p>
                        <p className='text-mainGray col-span-1'>Date</p>

                    </div>
                    { user?.mainUser && user?.mainUser?.length > 0 && (

                        user.mainUser.map( activity => (
                            <div className='grid grid-cols-5 col-span-5 px-4'  key={activity.id}>
                                <div className='col-span-4 text-mainGray'>
                                    {activity.description}
                                </div>
                                <div className='col-span-1 text-mainGray'>
                                    {formatDateWords(activity.createdAt)}
                                </div>
                            </div>
                        ))
                    ) }
            </div>
        </div>
        
        


    </div>
  )
}

export default UserAdminPage