module.exports = {

"[project]/app/lib/accessTokenStore.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearAccessToken": (()=>clearAccessToken),
    "getAccessToken": (()=>getAccessToken),
    "setAccessToken": (()=>setAccessToken)
});
let accessToken = null;
const setAccessToken = (token)=>{
    accessToken = token;
};
const getAccessToken = ()=>accessToken;
const clearAccessToken = ()=>{
    accessToken = null;
};
}}),
"[project]/app/api/auth.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiFetch": (()=>apiFetch),
    "useGetUser": (()=>useGetUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/accessTokenStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$UserContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/UserContext.js [app-ssr] (ecmascript)");
'use client';
;
;
;
async function apiFetch(url, options = {}) {
    // Access token stored in memory (React state or module-level variable)
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAccessToken"])(); // just in-memory, no SecureStore
    let res = await fetch(url, {
        ...options,
        headers: {
            ...options.headers || {},
            Authorization: `Bearer ${token}`
        },
        credentials: "include"
    });
    if (res.status !== 401) return res;
    // Access token expired → attempt refresh
    try {
        const refreshRes = await fetch(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/auth/refresh`, {
            method: "POST",
            credentials: "include"
        });
        console.log('refresh result', refreshRes);
        if (!refreshRes.ok) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])(); // refresh failed → logout
            // window.location.href="/"
            return;
        }
        const { accessToken: newAccessToken } = await refreshRes.json();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAccessToken"])(newAccessToken); // update in-memory token
        // Retry original request with new token
        res = await fetch(url, {
            ...options,
            headers: {
                ...options.headers || {},
                Authorization: `Bearer ${newAccessToken}`
            },
            credentials: "include"
        });
        if (res.status === 401) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
            return;
        }
        return res;
    } catch (err) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
        console.error(err);
    }
}
const useGetUser = ()=>{
    const { user, updateUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$UserContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserContext"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!user);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const getUser = async ()=>{
        // 1️⃣ Return from global state if exists
        if (user) return user;
        let token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAccessToken"])();
        // 2️⃣ Try to refresh access token if missing
        if (!token) {
            console.log('no token');
            try {
                const refreshRes = await fetch(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/auth/refresh`, {
                    method: "POST",
                    credentials: "include"
                });
                if (!refreshRes.ok) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
                    return null;
                }
                const data = await refreshRes.json();
                token = data.accessToken;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAccessToken"])(token);
            } catch (err) {
                console.error("Refresh token failed", err);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
                return null;
            }
        }
        // 3️⃣ Check localStorage cache
        try {
            const storedJSON = localStorage.getItem("user-data");
            if (storedJSON) {
                console.log('stored json');
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
            console.log('fetching...');
            const res = await apiFetch(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/user/simple`);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchUser = async ()=>{
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
                } finally{
                    setLoading(false);
                }
            }
        };
        fetchUser();
    }, [
        user
    ]);
    const forceRefetchUser = async ()=>{
        setLoading(true);
        try {
            // clear memory + localStorage
            updateUser(null);
            localStorage.removeItem("user-data");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
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
        } finally{
            setLoading(false);
        }
    };
    return {
        user,
        loading,
        error,
        refetch: getUser,
        updateUser,
        forceRefetchUser
    };
};
}}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/components/ui/spinner.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Spinner": (()=>Spinner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
function Spinner({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
        role: "status",
        "aria-label": "Loading",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("size-4 animate-spin", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/spinner.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/app/api/admin.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "grantStatus": (()=>grantStatus),
    "loginLocal": (()=>loginLocal),
    "useGetRecentUserSignups": (()=>useGetRecentUserSignups)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/accessTokenStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/auth.ts [app-ssr] (ecmascript)");
;
;
;
const loginLocal = async (body)=>{
    try {
        const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include'
        });
        if (!res.ok) return {
            error: "Invalid credentials"
        };
        const data = await res.json();
        const { accessToken } = data;
        // store access token in memory
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAccessToken"])(accessToken);
        return {
            message: "Successfully logged in",
            success: true
        };
    } catch (err) {
        console.error(err);
        return {
            success: false
        };
    }
};
const grantStatus = async (data)=>{
    try {
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiFetch"])(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/admin/grant-status`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (res?.status === 403) return {
            error: "Incorrect Access Key"
        };
        if (!res?.ok) throw new Error("Invalid request");
        const resData = await res?.json();
        return resData;
    } catch (err) {
        console.error(err);
    }
};
const useGetRecentUserSignups = (limit = 15)=>{
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [cursor, setCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('null');
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const getRecentUserSignupsInfinite = async ()=>{
        if (!hasMore) return;
        try {
            setLoading(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiFetch"])(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/admin/signups?cursor=${cursor}&limit=${limit}`);
            if (!res?.ok) throw new Error("Invalid request");
            const resData = await res?.json();
            setData((prev)=>[
                    ...prev,
                    ...resData.items
                ]);
            setCursor(resData.cursor);
            setHasMore(!!resData.cursor);
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    const getRecentUserSignups = async ()=>{
        if (!hasMore) return;
        try {
            setLoading(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiFetch"])(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/admin/signups?cursor=null&limit=${limit}`);
            if (!res?.ok) throw new Error("Invalid request");
            const resData = await res?.json();
            setData(resData.items);
            setTotalCount(resData.totalUsers);
            setCursor(resData.cursor);
            setHasMore(!!resData.cursor);
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        getRecentUserSignups();
    }, []);
    return {
        data,
        totalCount,
        loading,
        refetch: getRecentUserSignups,
        fetchMore: getRecentUserSignupsInfinite
    };
};
}}),
"[project]/app/lib/fallbackImages.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "avatarFallback": (()=>avatarFallback),
    "posterFallback": (()=>posterFallback)
});
const avatarFallback = "https://www.gravatar.com/avatar/?d=mp";
const posterFallback = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
}}),
"[project]/app/lib/formatDate.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatDateNumbers": (()=>formatDateNumbers),
    "formatDateTimeWords": (()=>formatDateTimeWords),
    "formatDateWords": (()=>formatDateWords)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isToday.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInMinutes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInHours.js [app-ssr] (ecmascript)");
;
const formatDateNumbers = (date)=>{
    const now = new Date(); // Get current date and time
    const targetDate = new Date(date); // Convert input to a Date object
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isToday"])(targetDate)) {
        let minutesAgo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInMinutes"])(now, targetDate);
        if (minutesAgo === 0) {
            minutesAgo = 1;
        }
        if (minutesAgo < 60) {
            return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`; // For less than an hour
        }
        const hoursAgo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInHours"])(now, targetDate);
        return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`; // For more than an hour
    }
    // If the date is not today, format it to M/d/yyyy
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(targetDate, "M/d/yyyy");
};
const formatDateWords = (date)=>{
    const targetDate = new Date(date);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(targetDate, "MMMM d, yyyy"); // e.g., November 20, 2025
};
const formatDateTimeWords = (date)=>{
    const targetDate = new Date(date);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(targetDate, "h:mm a MMM d, yyyy");
// Example -> 7:43 PM Nov 24, 2025
};
}}),
"[project]/app/admin/dashboard/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/spinner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$admin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/admin.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Colors.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$fallbackImages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/fallbackImages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$formatDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/formatDate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const AdminDashboard = ()=>{
    const { user, forceRefetchUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetUser"])();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: recentUsers, loading, totalCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$admin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetRecentUserSignups"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {
            adminSecret: input
        };
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$admin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["grantStatus"])(data);
        if (res.error) {
            setError(res.error);
        } else {
            console.log('updated user?');
            forceRefetchUser();
            setError('');
        }
    };
    const handleClick = (id)=>{
        router.push(`/admin/user/${id}`);
    };
    if (!user) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spinner"], {
        color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].mainGray,
        className: "w-12 h-12 pt-30 text-mainGray"
    }, void 0, false, {
        fileName: "[project]/app/admin/dashboard/page.tsx",
        lineNumber: 48,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 pt-30 px-40",
        children: user.isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gap-3 flex justify-center items-center flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-mainGray font-bold text-3xl py-10 text-center",
                    children: "Admin Dashboard"
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.tsx",
                    lineNumber: 56,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row gap-3 py-2 w-full justify-start",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 bg-primaryLight p-10 rounded-2xl justify-center items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-mainGray",
                                children: "Total Signups"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dashboard/page.tsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-5xl text-mainGray font-bold",
                                children: totalCount
                            }, void 0, false, {
                                fileName: "[project]/app/admin/dashboard/page.tsx",
                                lineNumber: 61,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/dashboard/page.tsx",
                        lineNumber: 59,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-primaryLight rounded-2xl gap-3 py-10 grid grid-cols-7 justify-center items-center px-10 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-7 col-span-7 py-3 px-6 rounded-xl  bg-primary opacity-50 justify-center items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-mainGray  col-span-3 ",
                                    children: "User"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dashboard/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-mainGray   col-span-2",
                                    children: "Username"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dashboard/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-mainGray  ",
                                    children: "Last signed in"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dashboard/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-mainGray   ",
                                    children: "Created"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dashboard/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/dashboard/page.tsx",
                            lineNumber: 66,
                            columnNumber: 25
                        }, this),
                        recentUsers.map((user)=>// <React.Fragment key={user.id} >
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleClick(user.id),
                                className: "grid grid-cols-7 col-span-7 py-3 px-6 rounded-2xl  hover:bg-primary/20 transition justify-center items-center hover:cursor-pointer ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: " py-2 flex flex-row justify-start items-start gap-3 col-span-3 ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: user?.profilePic || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$fallbackImages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avatarFallback"],
                                                width: 45,
                                                height: 45,
                                                unoptimized: true,
                                                style: {
                                                    borderRadius: 50
                                                },
                                                alt: "user profile picture"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/dashboard/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "justify-center items-center ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-mainGray ",
                                                        children: [
                                                            user.firstName,
                                                            user?.lastName && ` ${user.lastName}`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/dashboard/page.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-mainGray ",
                                                        children: user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/dashboard/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/dashboard/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/dashboard/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "justify-center items-center col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-mainGray",
                                            children: [
                                                "@",
                                                user.username
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/dashboard/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/dashboard/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: user?.session && user?.session?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-mainGray",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$formatDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateWords"])(user.session[0].createdAt)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/dashboard/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-mainGray",
                                            children: "N/A"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/dashboard/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/dashboard/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-mainGray",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$formatDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateWords"])(user.createdAt)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/dashboard/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/dashboard/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, user.id, true, {
                                fileName: "[project]/app/admin/dashboard/page.tsx",
                                lineNumber: 78,
                                columnNumber: 33
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/dashboard/page.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/page.tsx",
            lineNumber: 53,
            columnNumber: 13
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-mainGray font-bold text-2xl text-center py-10",
                    children: "You don't have Admin access."
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/page.tsx",
                    lineNumber: 122,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "flex flex-col gap-3 justify-center items-center",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400  ",
                            children: [
                                "*",
                                error
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/dashboard/page.tsx",
                            lineNumber: 125,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-mainGray flex flex-col gap-1",
                            children: [
                                "Admin Access Key",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    className: "bg-primaryLight p-2 rounded-lg",
                                    name: "access-key",
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/dashboard/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/dashboard/page.tsx",
                            lineNumber: 127,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-mainGrayDark py-2 px-4 rounded-xl text-primary font-bold",
                            type: "submit",
                            children: "Get access"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/dashboard/page.tsx",
                            lineNumber: 131,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/dashboard/page.tsx",
                    lineNumber: 123,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/page.tsx",
            lineNumber: 121,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/dashboard/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AdminDashboard;
}}),

};

//# sourceMappingURL=_99757baa._.js.map