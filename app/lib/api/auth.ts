'use client'

import { useEffect, useState } from "react";
import { clearAccessToken, getAccessToken, setAccessToken } from "../accessTokenStore";
import { useUserContext } from "../UserContext";

// apiFetch.ts
export async function apiFetch(url: string, options: RequestInit = {}) {
  // Access token stored in memory (React state or module-level variable)
  const token = getAccessToken(); // just in-memory, no SecureStore

  let res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`
    },
    credentials: "include", // ensures cookies are sent (refresh token)
  });

  if (res.status !== 401) return res;

  // Access token expired → attempt refresh
 
  try {
    const refreshRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include", // send HttpOnly refresh cookie
    });
    console.log('refresh result',refreshRes)

    if (!refreshRes.ok) {
      clearAccessToken(); // refresh failed → logout
      // window.location.href="/"
      return;
    }

    const { accessToken: newAccessToken } = await refreshRes.json();
    setAccessToken(newAccessToken); // update in-memory token

    // Retry original request with new token
    res = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${newAccessToken}`, // overwrite any previous token
      },
      credentials: "include",
    });


    if (res.status === 401) {
      clearAccessToken();
      return;
    }

    return res;
  } catch (err) {
    clearAccessToken();
    console.error(err);
  }
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