import { useEffect, useState } from "react"
import { setAccessToken } from "../accessTokenStore"
import { apiFetch } from "./auth"
import { User } from "@/app/types"

type LoginParams = {
    login : string,
    password : string
}

type GrantStatusParams = {
    adminSecret : string
}

export const loginLocal = async (body: LoginParams) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method : 'POST',
            headers : { 'Content-type' : 'application/json'},
            body : JSON.stringify(body),
            credentials:'include'
        })
        if (!res.ok) return { error : "Invalid credentials" }
        const data = await res.json()
        const { accessToken } = data;

        // store access token in memory
        setAccessToken(accessToken);
        return {message : "Successfully logged in", success : true}
    

    } catch (err){
        console.error(err)
        return {success : false}
    }
}

export const grantStatus = async (data: GrantStatusParams) => {
    try {
        const res = await apiFetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/grant-status`, {
            method : 'PATCH',
            headers : { 'Content-type' : 'application/json'},
            body : JSON.stringify(data),
        })
        if (res?.status === 403) return { error : "Incorrect Access Key" }
        if (!res?.ok) throw new Error("Invalid request")
        const resData = await res?.json()
        return resData
    } catch(err){
        console.error(err)
    }
}

export const useGetRecentUserSignups = (user: User,limit=15) => {
    const [data, setData] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [cursor, setCursor] = useState('null')
    const [hasMore, setHasMore] = useState(true)
    const [totalCount, setTotalCount] = useState('')

    const getRecentUserSignupsInfinite = async () => {
        
        if (!hasMore) return
        try {
            setLoading(true)
            const res = await apiFetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/signups?cursor=${cursor}&limit=${limit}`)
            if (!res?.ok) throw new Error("Invalid request")
            const resData = await res?.json()
            setData(prev => ([...prev, ...resData.items]))
            setCursor(resData.cursor)
            setHasMore(!!resData.cursor)

        } catch (err){
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const getRecentUserSignups = async () => {
        
        if (!hasMore) return
        try {
            setLoading(true)
            const res = await apiFetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/signups?cursor=null&limit=${limit}`)
            if (!res?.ok) throw new Error("Invalid request")
            const resData = await res?.json()
            setData(resData.items)
            setTotalCount(resData.totalUsers)
            setCursor(resData.cursor)
            setHasMore(!!resData.cursor)

        } catch (err){
            console.error(err)
        } finally {
            setLoading(false)
        }
    }




    useEffect(() => {
        if (!user) return  
        getRecentUserSignups()
    }, [user])

    return { data, totalCount, loading, refetch:getRecentUserSignups, fetchMore : getRecentUserSignupsInfinite }
}
