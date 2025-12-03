'use client'

import { useGetUser } from '@/app/lib/api/auth'
import React, { useState } from 'react'
import { Spinner } from "@/components/ui/spinner";
import { grantStatus, useGetRecentUserSignups } from '@/app/lib/api/admin';
import { colors } from '@/constants/Colors';


const AdminDashboard = () => {
    const {user, forceRefetchUser} = useGetUser()
    const [ input, setInput ] = useState('')
    const [error, setError] = useState('')

    const { data:recentUsers, loading, fetchMore, totalCount } = useGetRecentUserSignups(user)


    const handleSubmit = async (e) => {
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



    if (!user) return <Spinner color={colors.mainGray} className="w-12 h-12 pt-30 text-mainGray" />

  return (
    <div className='flex-1 pt-30 px-10'>
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
                <div className='w-full bg-primaryLight rounded-2xl gap-3 py-10'>
                    { recentUsers.map( user => (
                        <div className='px-8 py-2' key={user.id}>
                            <p className='text-mainGray '>{user.firstName}</p>
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