'use client'

import { useGetUser } from '@/app/api/auth'
import React, { useState } from 'react'
import { Spinner } from "@/components/ui/spinner";
import { grantStatus, useGetRecentUserSignups } from '@/app/api/admin';
import { colors } from '@/constants/Colors';
import Image from 'next/image';
import { avatarFallback } from '@/app/lib/fallbackImages';
import {  formatDateWords } from '@/app/lib/formatDate';
import { useRouter } from 'next/navigation'



const AdminDashboard = () => {
    const {user, forceRefetchUser} = useGetUser()
    const [ input, setInput ] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const { data:recentUsers, loading, totalCount } = useGetRecentUserSignups()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            adminSecret : input
        }

        const res = await grantStatus(data)
        if (res.error){
            setError(res.error)
        } else {
            console.log('updated user?')
            forceRefetchUser()
            setError('')
        }


    }

    const handleClick = (id:number) => {
        router.push(`/admin/user/${id}`)
    }



    if (!user) return <Spinner color={colors.mainGray} className="w-12 h-12 pt-30 text-mainGray" />

  return (
    <div className='flex-1 pt-30 px-40'>
        { user.isAdmin ? (
            <div className='gap-3 flex justify-center items-center flex-col'>
                <h1 className='text-mainGray font-bold text-3xl py-10 text-center'>Admin Dashboard</h1>
                { loading && (
                    <Spinner></Spinner>
                ) }
                <div className='flex flex-row gap-3 py-2 w-full justify-start'>
                    <div className='flex flex-col gap-2 bg-primaryLight p-10 rounded-2xl justify-center items-center'>
                        <p className='text-mainGray'>Total Signups</p>
                        <p className='text-5xl text-mainGray font-bold'>{totalCount}</p>
                    </div>

                </div>
                <div className='w-full bg-primaryLight rounded-2xl gap-3 py-10 grid grid-cols-7 justify-center items-center px-10 relative'>
                        <div
                            className='grid grid-cols-7 col-span-7 py-3 px-6 rounded-xl 
                                   bg-primary opacity-50 justify-center items-center'
                        >
                            <p className='text-mainGray  col-span-3 '>User</p>
                            <p className='text-mainGray   col-span-2'>Username</p>
                            <p className='text-mainGray  '>Last signed in</p>
                            <p className='text-mainGray   '>Created</p>
                        </div>

                        { recentUsers.map( user => (
                            // <React.Fragment key={user.id} >
                                <div
                                    onClick={()=>handleClick(user.id)}
                                    key={user.id}
                                    className='grid grid-cols-7 col-span-7 py-3 px-6 rounded-2xl 
                                            hover:bg-primary/20 transition justify-center items-center hover:cursor-pointer '
                                >
                                <div className=' py-2 flex flex-row justify-start items-start gap-3 col-span-3 ' >
                                    <Image
                                        src={user?.profilePic || avatarFallback}
                                        width={45}
                                        height={45}
                                        unoptimized
                                        style={{borderRadius:50}}
                                        alt="user profile picture"
                                    />
                                    <div className='justify-center items-center '>
                                        <p className='text-mainGray '>{user.firstName}{user?.lastName && ` ${user.lastName}`}</p>
                                        <p className='text-mainGray '>{user.email}</p>
                                    </div>
                                </div>

                                <div className='justify-center items-center col-span-2'>
                                    <p className='text-mainGray'>@{user.username}</p>
                                </div>
                                
                                <div className='flex items-center'>
                                    { user?.session  && user?.session?.length > 0 ? (
                                        <p className='text-mainGray'>{ formatDateWords(user.session[0].createdAt)}</p>
                                    ) : (
                                        <p className='text-mainGray'>N/A</p>
                                    )
                                     }
                                </div>
                                <div className='flex items-center'>
                                    <p className='text-mainGray'>{formatDateWords(user.createdAt)}</p>
                                </div>
                            {/* </React.Fragment> */}
                            </div>

                        ) ) }
                </div>
            </div>
        ) : (
            <div>
                <h2 className='text-mainGray font-bold text-2xl text-center py-10'>You don't have Admin access.</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3 justify-center items-center'>
                    {error && (
                        <p className='text-red-400  '>*{error}</p>
                    )}
                    <label  className='text-mainGray flex flex-col gap-1'  >
                        Admin Access Key
                        <input type='password' className='bg-primaryLight p-2 rounded-lg' name='access-key' value={input}  onChange={(e) => setInput(e.target.value)} />
                    </label>
                    <button className='bg-mainGrayDark py-2 px-4 rounded-xl text-primary font-bold' type='submit'>Get access</button>
                </form>

            </div>
        ) }
    </div>

  )
}

export default AdminDashboard