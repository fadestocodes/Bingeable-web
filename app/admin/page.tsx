'use client'

import React, { useState } from 'react'
import { loginLocal } from '../lib/api/admin'
// import { useGetUser } from '../lib/api/auth'
import { useRouter } from 'next/navigation'


const AdminPage = () => {
    
    const [ input, setInput ] = useState({
        emailOrUsername : '',
        password : ''
    })

    const router = useRouter()



    const handleChange = (e) => {
        setInput( prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            login : input.emailOrUsername,
            password : input.password
        }
        const res = await loginLocal(data)
        if (res.success){
            router.push('/admin/dashboard')
        }
    }

  return (
    <div className=' w-full h-full pt-30' >
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 justify-center items-center'>
            <label className='text-mainGray flex flex-col gap-1'  >
                Username or email
                <input type='text' className='bg-primaryLight p-2 rounded-lg' name='emailOrUsername' value={input.emailOrUsername}  onChange={(e) => handleChange(e)} />
            </label>
            <label  className='text-mainGray flex flex-col gap-1'>
                Password
                <input type='password' className='bg-primaryLight p-2 rounded-lg' name='password' value={input.password} onChange={(e) => handleChange(e)} />
            </label>
            <button className='bg-mainGrayDark py-2 px-4 rounded-xl text-primary font-bold' type='submit'>Log in</button>

        </form>

    </div>
  )
}

export default AdminPage