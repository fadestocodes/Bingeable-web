module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/constants/Colors.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "colors": (()=>colors)
});
const colors = {
    primary: "#171717",
    primaryLight: '#1f2223',
    primaryDark: '#0e1010',
    secondary: "#ffe600",
    // secondary: "#c2fc03", 
    secondary200: '#f19a0e',
    third: '#FEFAE0',
    lightBlack: '#414549',
    mainGray: '#9ca3af',
    mainGrayLight: '#e5e7eb',
    mainGrayDark: '#262626',
    darkGray: '#232533',
    lightGray: '#CDCDE0',
    green: '#84e38d',
    red: '#fa8a84'
};
}}),
"[project]/constants/tmdbPosterUrl.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "posterURL": (()=>posterURL),
    "posterURLlow": (()=>posterURLlow)
});
const posterURL = 'https://image.tmdb.org/t/p/original';
const posterURLlow = 'https://image.tmdb.org/t/p/w500';
}}),
"[project]/components/UserCarousel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Colors.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$tmdbPosterUrl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/tmdbPosterUrl.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const UserCarousel = ({ usersList })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-row flex gap-5 w-full overflow-hidden ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-5 w-max animate-scroll-left",
            style: {
                animation: 'scrollLeft 40s linear infinite'
            },
            children: usersList.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        borderRadius: 15
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-[200px] h-[320px] overflow-hidden ",
                        style: {
                            borderRadius: 30,
                            overflow: 'hidden',
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].mainGrayDark
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full  ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: user.profilePic,
                                    alt: "Header Image",
                                    // fill = {true}
                                    width: 200,
                                    height: 200,
                                    objectFit: "cover",
                                    style: {
                                        zIndex: 0
                                    },
                                    className: " absolute top-0 left-0  right-0 pb-10"
                                }, void 0, false, {
                                    fileName: "[project]/components/UserCarousel.tsx",
                                    lineNumber: 23,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 w-full h-[450px] rounded-[15px] overflow-hidden",
                                    style: {
                                        background: `linear-gradient(to bottom, transparent 20%, #171717 55%, #171717 100%)`,
                                        zIndex: 0
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/UserCarousel.tsx",
                                    lineNumber: 36,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                zIndex: 20
                                            },
                                            className: "relative z-20 pt-26 text-white justify-center items-center w-full h-full ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "font-extrabold text-sm  text-center",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].secondary
                                                    },
                                                    children: [
                                                        user.firstName,
                                                        " ",
                                                        user.lastName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/UserCarousel.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-center text-xs font-bold",
                                                    children: [
                                                        "@",
                                                        user.username
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/UserCarousel.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 37
                                                }, this),
                                                user.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "px-6 pt-2 justify-self-center   font-mono",
                                                    style: {
                                                        fontSize: 9.5,
                                                        lineHeight: 1.2
                                                    },
                                                    children: user.bio
                                                }, void 0, false, {
                                                    fileName: "[project]/components/UserCarousel.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/UserCarousel.tsx",
                                            lineNumber: 44,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "gap-3 flex flex-col justify-center items-center pt-4 ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    className: "z-20 text-xs font-bold",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].mainGray
                                                    },
                                                    children: "Current Rotation"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/UserCarousel.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: " gap-2 flex flex-row  justify-center items-center",
                                                    children: user.currentRotation.map((rotation)=>{
                                                        console.log('ROTATION', rotation);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "z-20 ",
                                                            style: {
                                                                borderRadius: 5,
                                                                overflow: 'hidden'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                width: 25,
                                                                height: 80,
                                                                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$tmdbPosterUrl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["posterURL"]}/${rotation?.movie?.posterPath || rotation?.tv?.posterPath}`,
                                                                alt: "movie poster"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/UserCarousel.tsx",
                                                                lineNumber: 60,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, rotation.id, false, {
                                                            fileName: "[project]/components/UserCarousel.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 45
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/UserCarousel.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/UserCarousel.tsx",
                                            lineNumber: 52,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/UserCarousel.tsx",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UserCarousel.tsx",
                            lineNumber: 22,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/UserCarousel.tsx",
                        lineNumber: 20,
                        columnNumber: 21
                    }, this)
                }, user.id, false, {
                    fileName: "[project]/components/UserCarousel.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/UserCarousel.tsx",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/UserCarousel.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = UserCarousel;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__1ab35114._.js.map