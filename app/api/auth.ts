
import { clearAccessToken, getAccessToken, setAccessToken } from "../lib/accessTokenStore";

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


