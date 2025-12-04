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
"[project]/app/lib/api/auth.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/app/lib/api/admin.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/api/auth.ts [app-ssr] (ecmascript)");
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
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiFetch"])(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/admin/grant-status`, {
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
const useGetRecentUserSignups = (user, limit = 15)=>{
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [cursor, setCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('null');
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const getRecentUserSignupsInfinite = async ()=>{
        if (!hasMore) return;
        try {
            setLoading(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiFetch"])(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/admin/signups?cursor=${cursor}&limit=${limit}`);
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiFetch"])(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/admin/signups?cursor=null&limit=${limit}`);
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
        if (!user) return;
        getRecentUserSignups();
    }, [
        user
    ]);
    return {
        data,
        totalCount,
        loading,
        refetch: getRecentUserSignups,
        fetchMore: getRecentUserSignupsInfinite
    };
};
}}),
"[project]/app/admin/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$api$2f$admin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/api/admin.ts [app-ssr] (ecmascript)");
// import { useGetUser } from '../lib/api/auth'
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const AdminPage = ()=>{
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        emailOrUsername: '',
        password: ''
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleChange = (e)=>{
        setInput((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {
            login: input.emailOrUsername,
            password: input.password
        };
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$api$2f$admin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginLocal"])(data);
        if (res.success) {
            router.push('/admin/dashboard');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " w-full h-full pt-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "flex flex-col gap-3 justify-center items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "text-mainGray flex flex-col gap-1",
                    children: [
                        "Username or email",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: "bg-primaryLight p-2 rounded-lg",
                            name: "emailOrUsername",
                            value: input.emailOrUsername,
                            onChange: (e)=>handleChange(e)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 44,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 42,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "text-mainGray flex flex-col gap-1",
                    children: [
                        "Password",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            className: "bg-primaryLight p-2 rounded-lg",
                            name: "password",
                            value: input.password,
                            onChange: (e)=>handleChange(e)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 48,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 46,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-mainGrayDark py-2 px-4 rounded-xl text-primary font-bold",
                    type: "submit",
                    children: "Log in"
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 50,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 41,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AdminPage;
}}),

};

//# sourceMappingURL=app_0fd3206f._.js.map