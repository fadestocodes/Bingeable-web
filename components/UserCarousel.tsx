import { User } from '@/app/types'
import React from 'react'
import Image from 'next/image'
import { colors } from '@/constants/Colors'

const UserCarousel = ({ usersList } : User[]) => {

        
    return (
        <div className='flex-row flex gap-10   '>
            { usersList.map( user => (
                <div key={user.id} style={{ background: colors.mainGrayDark }}>
                    <Image
                        src={user.profilePic}
                        height={600}
                        width={600}
                        alt={'user profile pic'}
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#262626]" style={{zIndex:1}} /> */}

                </div>
            ) ) }
        </div>
    )
}

export default UserCarousel