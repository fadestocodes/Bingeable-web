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
        const refreshRes = await fetch("/auth/refresh", {
            method: "POST",
            credentials: "include"
        });
        if (!refreshRes.ok) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccessToken"])(); // refresh failed → logout
            window.location.href = "/";
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
        // 1️⃣ Check global state
        if (user) return user;
        const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccessToken"])();
        if (!accessToken) {
            return null;
        }
        // 2️⃣ Check AsyncStorage
        try {
            const storedJSON = localStorage.getItem('user-data');
            if (storedJSON) {
                const storedUser = JSON.parse(storedJSON);
                updateUser(storedUser);
                return storedUser;
            }
        } catch (err) {
            console.error('Failed to read or parse user from AsyncStorage', err);
            localStorage.removeItem('user-data'); // clear corrupted data
        }
        // 3️⃣ Fetch from API (using apiFetch to auto-refresh token)
        try {
            const res = await apiFetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_URL}/user/simple`);
            if (res.status === 401) {
                return;
            }
            if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
            const userData = await res.json();
            const userJSON = JSON.stringify(userData);
            // Update AsyncStorage and global state
            localStorage.setItem('user-data', userJSON);
            updateUser(userData);
            return userData;
        } catch (err) {
            return;
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
                            setError(err);
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
    return {
        user,
        loading,
        error,
        refetch: getUser,
        updateUser
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
"[project]/app/api/admin.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "grantStatus": (()=>grantStatus),
    "loginLocal": (()=>loginLocal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/accessTokenStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/auth.ts [app-client] (ecmascript)");
;
;
const loginLocal = async (body)=>{
    try {
        const res = await fetch(`${("TURBOPACK compile-time value", "http://192.168.1.65:3000/api")}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (!res.ok) return {
            error: "Invalid credentials"
        };
        const data = await res.json();
        console.log('data', data);
        const { accessToken } = data;
        // store access token in memory
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$accessTokenStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(accessToken);
        console.log('succesfuly logged in');
        return {
            message: "Successfully logged in"
        };
    } catch (err) {
        console.error(err);
    }
};
const grantStatus = async (data)=>{
    try {
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`${("TURBOPACK compile-time value", "http://192.168.1.65:3000/api")}/admin/grant-status`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Invalid request");
        const resData = await res?.json();
        return resData;
    } catch (err) {
        console.error(err);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/admin/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$admin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/admin.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const AdminPage = ()=>{
    _s();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        emailOrUsername: '',
        password: ''
    });
    const handleChange = (e)=>{
        setInput((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handleSubmit = async ()=>{
        const data = {
            login: input.emailOrUsername,
            password: input.password
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$admin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginLocal"])();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " w-full h-full pt-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "flex flex-col gap-3 justify-center items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "text-mainGray flex flex-col gap-1",
                    children: [
                        "Username or email",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "bg-primaryLight p-2 rounded-lg",
                            name: "emailOrUsername",
                            value: input.emailOrUsername,
                            onChange: (e)=>handleChange(e)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 34,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 32,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "text-mainGray flex flex-col gap-1",
                    children: [
                        "Password",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            className: "bg-primaryLight p-2 rounded-lg",
                            name: "password",
                            value: input.password,
                            onChange: (e)=>handleChange(e)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 38,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 36,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-mainGrayDark py-2 px-4 rounded-xl text-primary font-bold",
                    type: "submit",
                    children: "Log in"
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
_s(AdminPage, "gkSiTQDGXa6Xrl3c1GzLzXJQ0N0=");
_c = AdminPage;
const __TURBOPACK__default__export__ = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_33997532._.js.map