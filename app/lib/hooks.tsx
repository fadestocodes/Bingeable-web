'use client'
import { useEffect, useState } from "react"
import { apiFetch } from "../api/auth"
import { Activity, User } from "../types"
import { clearAccessToken, getAccessToken, setAccessToken } from "./accessTokenStore"
import { useUserContext } from "./UserContext"

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



export const useGetRecentUserSignups = (limit=15) => {
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
        getRecentUserSignups()
    }, [])

    return { data, totalCount, loading, refetch:getRecentUserSignups, fetchMore : getRecentUserSignupsInfinite }
}




export const useGetUser = () => {
    const { user, updateUser } = useUserContext();
    const [loading, setLoading] = useState<boolean>(!user);
    const [error, setError] = useState<Error | null>(null);
  
    const getUser = async () => {
      // 1️⃣ Return from global state if exists
      if (user) return user;
  
      let token = getAccessToken();
      
      // 2️⃣ Try to refresh access token if missing
      if (!token) {
        console.log('no token')
        try {
          const refreshRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
            method: "POST",
            credentials: "include", // send HttpOnly cookie
          });
  
          
  
          if (!refreshRes.ok) {
            clearAccessToken();
            return null;
          }
  
          const data = await refreshRes.json();
          token = data.accessToken;
          setAccessToken(token);
        } catch (err) {
          console.error("Refresh token failed", err);
          clearAccessToken();
          return null;
        }
      }
  
      // 3️⃣ Check localStorage cache
      try {
        const storedJSON = localStorage.getItem("user-data");
        if (storedJSON) {
          console.log('stored json')
          const storedUser = JSON.parse(storedJSON);
          updateUser(storedUser);
          return storedUser;
        }
      } catch (err) {
        console.error("Failed to read/parse user from localStorage", err);
        localStorage.removeItem("user-data"); // clear corrupted data
      }
  
      // 4️⃣ Fetch user from API
      try {
        console.log('fetching...')
        const res = await apiFetch(`${process.env.NEXT_PUBLIC_API_URL}/user/simple`);
        if (!res || !res.ok) {
          return null;
        }
  
        const userData = await res.json();
        localStorage.setItem("user-data", JSON.stringify(userData));
        updateUser(userData);
  
        return userData;
      } catch (err) {
        console.error("Failed to fetch user", err);
        return null;
      }
    };
  
    useEffect(() => {
      const fetchUser = async () => {
        if (!user) {
          setLoading(true);
          try {
            await getUser();
          } catch (err) {
            if (err instanceof Error) {
              setError(err);
            } else {
              setError(new Error(String(err)));
            }
          } finally {
            setLoading(false);
          }
        }
      };
      fetchUser();
    }, [user]);
  
    const forceRefetchUser = async () => {
      setLoading(true);
      try {
        // clear memory + localStorage
        updateUser(null);
        localStorage.removeItem("user-data");
        clearAccessToken();
  
        // fetch fresh user data
        const freshUser = await getUser();
        return freshUser;
      } catch (err) {
        console.error("Failed to force update user", err);
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error(String(err)));
        }
        return null;
      } finally {
        setLoading(false);
      }
    };
  
    return { user, loading, error, refetch: getUser, updateUser, forceRefetchUser };
  };



  export const useGetRecentActivitiesAdmin = () => {

    const [ data, setData ] = useState<Activity[] | []>([])
    const [ loading, setLoading ] = useState<boolean>(true)

    
    useEffect(() => {
        const getRecentActivitiesAdmin = async () => {
            try {
                setLoading(true)
                const res = await apiFetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/recent-activities`)
                if (!res?.ok) throw new Error("Invalid request")
                const resData = await res.json()
                setData(resData)
            } catch (err){
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        getRecentActivitiesAdmin()

    }, [])

    return {data, loading}
  }