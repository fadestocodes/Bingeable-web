'use client'

import { signUpEmailList } from '@/app/lib/api/email'
import { colors } from '@/constants/Colors';
import React, {useState} from 'react'
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const twitterUrl = 'https://www.x.com/bingeableapp'
const igUrl = 'https://www.instagram.com/bingeableapp'


const Footer = () => {
    const [ input, setInput ] = useState('')

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log(`SUBMITTING: ${input}`)
        e.preventDefault()

        try {
            await signUpEmailList(input)
            setInput('')
        } catch (err){
            console.log(err)
        }



    }
    
    const handleClick = (source: string) => {
        if (source === 'twitter'){
            window.open(twitterUrl, '_blank');
        } else if (source === 'instagram'){
            window.open(igUrl, '_blank');
        }
    }


  return (
    <div className='w-full pt-12 pb-20 relative flex flex-col  justify-center items-center ' >
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-center items-center' >
            <div className='gap-1 flex flex-col justify-center items-center w-full' >
                <label htmlFor="email" className='text-2xl text-white font-bold text-center'>Sign up for our email list!</label>
                <p className='w-[70%] ' style={{color:colors.mainGray}}>Stay up to date with what we're working on, we promise no spam.</p>
            </div>
            <div className='relative  flex justify-center items-center ' >
                <input onChange={handleInput} type="email"  placeholder='exampleemail@gmail.com' name='email' value={input} className=' w-[500px] justify-self-center'
                style={{paddingLeft:20, width:320, paddingRight:20, paddingTop:10, paddingBottom:10,backgroundColor:'white', borderRadius:30}}/>
                <button disabled={!input} type='submit' className='cursor-pointer absolute flex justify-center items-center right-2 rounded-full
                 w-[60] h-[35px]' style={{backgroundColor:colors.primary}}>
                    <IoIosMail size={24} color={colors.secondary} />
                </button>
            </div>
        </form>
        <div className='flex flex-row gap-3 pt-5'>
            <div className='cursor-pointer' onClick={()=>handleClick('twitter')}>
                <FaSquareXTwitter size={22} color={'white'}/>

            </div>
            <div className='cursor-pointer' onClick={()=>handleClick('instagram')}>
                <RiInstagramFill size={22} color={'white'}/>

            </div>
        </div>
    </div>
  )
}

export default Footer