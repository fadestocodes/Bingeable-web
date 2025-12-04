(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/lib/accessTokenStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/api/auth.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiFetch": (()=>apiFetch),
    "useGetUser": (()=>useGetUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/accessTokenStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$UserContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/UserContext.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
async function apiFetch(url, options = {}) {
    // Access token stored in memory (React state or module-level variable)
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccessToken"])(); // just in-memory, no SecureStore
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccessToken"])(); // refresh failed → logout
            // window.location.href="/"
            return;
        }
        const { accessToken: newAccessToken } = await refreshRes.json();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(newAccessToken); // update in-memory token
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccessToken"])();
            return;
        }
        return res;
    } catch (err) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccessToken"])();
        console.error(err);
    }
}
const useGetUser = ()=>{
    _s();
    const { user, updateUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$UserContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!user);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const getUser = async ()=>{
        // 1️⃣ Return from global state if exists
        if (user) return user;
        let token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccessToken"])();
        // 2️⃣ Try to refresh access token if missing
        if (!token) {
            console.log('no token');
            try {
                const refreshRes = await fetch(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/auth/refresh`, {
                    method: "POST",
                    credentials: "include"
                });
                if (!refreshRes.ok) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccessToken"])();
                    return null;
                }
                const data = await refreshRes.json();
                token = data.accessToken;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(token);
            } catch (err) {
                console.error("Refresh token failed", err);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccessToken"])();
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGetUser.useEffect": ()=>{
            const fetchUser = {
                "useGetUser.useEffect.fetchUser": async ()=>{
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
                }
            }["useGetUser.useEffect.fetchUser"];
            fetchUser();
        }
    }["useGetUser.useEffect"], [
        user
    ]);
    const forceRefetchUser = async ()=>{
        setLoading(true);
        try {
            // clear memory + localStorage
            updateUser(null);
            localStorage.removeItem("user-data");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccessToken"])();
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
_s(useGetUser, "lA73rvNtcQ4clY/4H3BtK1Qlkqw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$UserContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/api/user.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUsersForCarousel": (()=>getUsersForCarousel),
    "useGetSingleUser": (()=>useGetSingleUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$serverEndpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/serverEndpoint.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/auth.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const getUsersForCarousel = async ()=>{
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$serverEndpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domain"]}/user/landing-page-carousel`);
        const data = await response.json();
        const usersList = data.data;
        return usersList;
    } catch (err) {
        console.log(err);
        return null;
    }
};
const useGetSingleUser = (params)=>{
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGetSingleUser.useEffect": ()=>{
            const getSingleUser = {
                "useGetSingleUser.useEffect.getSingleUser": async ()=>{
                    try {
                        setLoading(true);
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/user`, {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(params)
                        });
                        if (!res?.ok) throw new Error("Invalid request");
                        const resData = await res.json();
                        setData(resData);
                    } catch (err) {
                        console.error(err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useGetSingleUser.useEffect.getSingleUser"];
            if (!params) return;
            getSingleUser();
        }
    }["useGetSingleUser.useEffect"], [
        params
    ]);
    return {
        data,
        loading
    };
};
_s(useGetSingleUser, "Zn4cs3026OJRBhxLd0Oqj+bUOXY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/admin/user/[userId]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/user.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function UserAdminPage({ params }) {
    _s();
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const { data, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetSingleUser"])({
        id: Number(userId)
    });
    console.log('user id,,,', userId);
    console.log('user data,,,', data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-mainGray",
        children: "UserAdminPage"
    }, void 0, false, {
        fileName: "[project]/app/admin/user/[userId]/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(UserAdminPage, "giKpX3KtovXLsnl9ZemCXVVHgoA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetSingleUser"]
    ];
});
_c = UserAdminPage;
const __TURBOPACK__default__export__ = UserAdminPage;
var _c;
__turbopack_context__.k.register(_c, "UserAdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_539e723e._.js.map