'use client'

import { useEffect, useState } from "react";
import { domain } from "../lib/serverEndpoint";
import { User } from "@/app/types";
import { apiFetch } from "./auth";
import { StringDecoder } from "string_decoder";



export const getUsersForCarousel = async (): Promise<User[] | null>  => {
    try {
        const response = await fetch(`${domain}/user/landing-page-carousel`)
        const data = await response.json()
        const usersList: User[] = data.data
        return usersList
    } catch (err) {
        console.log(err)
        return null
    }
}

export const useGetSingleUser = (id : string) => {
    const [data, setData] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        const getSingleUser = async () => {
            try {
                setLoading(true)

                const res = await apiFetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/user/${id}`)
                if (!res?.ok) throw new Error("Invalid request")
                const resData = await res.json()
                setData(resData)
            } catch (err){
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        if (!id)return
        getSingleUser()
    }, [id])

    return {data, loading}
}