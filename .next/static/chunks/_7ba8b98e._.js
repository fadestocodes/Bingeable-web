(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/constants/tmdbPosterUrl.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "posterURL": (()=>posterURL),
    "posterURLlow": (()=>posterURLlow)
});
const posterURL = 'https://image.tmdb.org/t/p/original';
const posterURLlow = 'https://image.tmdb.org/t/p/w500';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/fallbackImages.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "avatarFallback": (()=>avatarFallback),
    "posterFallback": (()=>posterFallback)
});
const avatarFallback = "https://www.gravatar.com/avatar/?d=mp";
const posterFallback = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/UserCarousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Colors.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$tmdbPosterUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/tmdbPosterUrl.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$fallbackImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/fallbackImages.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const UserCarousel = ({ usersList })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-row flex gap-5 w-full overflow-hidden ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-5 w-max animate-scroll-left",
            style: {
                animation: 'scrollLeft 70s linear infinite'
            },
            children: usersList?.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        borderRadius: 15
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-[200px] h-[320px] overflow-hidden  ",
                        style: {
                            borderRadius: 30,
                            overflow: 'hidden',
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGrayDark
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full  ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: user?.profilePic ? user.profilePic : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$fallbackImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avatarFallback"],
                                    alt: "Header Image",
                                    // fill = {true}
                                    width: 200,
                                    height: 200,
                                    style: {
                                        zIndex: 0
                                    },
                                    className: " absolute top-0 left-0  right-0 pb-10"
                                }, void 0, false, {
                                    fileName: "[project]/components/UserCarousel.tsx",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 w-full h-[450px] rounded-[15px] overflow-hidden",
                                    style: {
                                        background: `linear-gradient(to bottom, transparent 20%, #171717 55%, #171717 100%)`,
                                        zIndex: 0
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/UserCarousel.tsx",
                                    lineNumber: 40,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                zIndex: 20
                                            },
                                            className: "relative z-20 pt-26 text-white justify-center items-center w-full h-full ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "font-extrabold text-sm  text-center",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].secondary
                                                    },
                                                    children: [
                                                        user.firstName,
                                                        " ",
                                                        user.lastName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/UserCarousel.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-center text-xs font-bold",
                                                    children: [
                                                        "@",
                                                        user.username
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/UserCarousel.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 37
                                                }, this),
                                                user.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "px-6 pt-2 justify-self-center   font-mono",
                                                    style: {
                                                        fontSize: 9.5,
                                                        lineHeight: 1.2
                                                    },
                                                    children: user.bio
                                                }, void 0, false, {
                                                    fileName: "[project]/components/UserCarousel.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/UserCarousel.tsx",
                                            lineNumber: 48,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "gap-3 flex flex-col justify-center items-center pt-4 ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "z-20 text-xs font-bold",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGray
                                                    },
                                                    children: "Current Rotation"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/UserCarousel.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: " gap-2 flex flex-row  justify-center items-center",
                                                    children: user?.currentRotation?.map((rotation)=>{
                                                        const imageUrl = rotation?.movie?.posterPath || rotation?.tv?.posterPath ? `${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$tmdbPosterUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posterURL"]}/${rotation?.movie?.posterPath || rotation?.tv?.posterPath}` : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$fallbackImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posterFallback"]; // Make sure this exists in your /public folder
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "z-20 ",
                                                            style: {
                                                                borderRadius: 5,
                                                                overflow: 'hidden'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                width: 25,
                                                                height: 80,
                                                                src: imageUrl,
                                                                alt: "movie poster"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/UserCarousel.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, rotation.id, false, {
                                                            fileName: "[project]/components/UserCarousel.tsx",
                                                            lineNumber: 65,
                                                            columnNumber: 45
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/UserCarousel.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/UserCarousel.tsx",
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/UserCarousel.tsx",
                                    lineNumber: 47,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UserCarousel.tsx",
                            lineNumber: 27,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/UserCarousel.tsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this)
                }, user.id, false, {
                    fileName: "[project]/components/UserCarousel.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/UserCarousel.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/UserCarousel.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_c = UserCarousel;
const __TURBOPACK__default__export__ = UserCarousel;
var _c;
__turbopack_context__.k.register(_c, "UserCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/formatDate.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatDate": (()=>formatDate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isToday.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInMinutes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInHours.js [app-client] (ecmascript)");
;
const formatDate = (date)=>{
    const now = new Date(); // Get current date and time
    const targetDate = new Date(date); // Convert input to a Date object
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isToday"])(targetDate)) {
        let minutesAgo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInMinutes"])(now, targetDate);
        if (minutesAgo === 0) {
            minutesAgo = 1;
        }
        if (minutesAgo < 60) {
            return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`; // For less than an hour
        }
        const hoursAgo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInHours"])(now, targetDate);
        return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`; // For more than an hour
    }
    // If the date is not today, format it to M/d/yyyy
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(targetDate, "M/d/yyyy");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/DialogueCarousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Colors.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-down.js [app-client] (ecmascript) <export default as ThumbsDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$tmdbPosterUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/tmdbPosterUrl.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/formatDate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$fallbackImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/fallbackImages.ts [app-client] (ecmascript)");
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
const DialogueCarousel = ({ dialogues })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-auto flex flex-row gap-3 items-start overflow-hidden  ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row items-start gap-5 w-max animate-scroll-left",
            style: {
                animation: 'scrollLeft 70s linear infinite'
            },
            children: dialogues?.map((dialogue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-between items-center py-4 px-6 gap-3  overflow-hidden  ",
                    style: {
                        minWidth: 400,
                        borderRadius: 15,
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGrayDark
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row w-full  justify-between items-center ",
                                    style: {},
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row gap-2 items-center  ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[30px] h-[30px] relative rounded-full overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: dialogue?.user?.profilePic ? dialogue.user.profilePic : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$fallbackImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avatarFallback"],
                                                        fill: true,
                                                        alt: "user profile picture",
                                                        className: "object-cover",
                                                        style: {
                                                            overflow: 'hidden'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/DialogueCarousel.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DialogueCarousel.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGray
                                                    },
                                                    children: [
                                                        "@",
                                                        dialogue.user.username
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/DialogueCarousel.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DialogueCarousel.tsx",
                                            lineNumber: 31,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGray
                                            },
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(dialogue.createdAt)
                                        }, void 0, false, {
                                            fileName: "[project]/components/DialogueCarousel.tsx",
                                            lineNumber: 44,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DialogueCarousel.tsx",
                                    lineNumber: 30,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full justify-center items-center pt-8 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "courier justify-self-center text-sm capitalize",
                                            style: {
                                                textTransform: 'uppercase',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].secondary
                                            },
                                            children: dialogue.user.firstName
                                        }, void 0, false, {
                                            fileName: "[project]/components/DialogueCarousel.tsx",
                                            lineNumber: 48,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "courier text-white justify-self-center text-sm",
                                            style: {},
                                            children: dialogue.content
                                        }, void 0, false, {
                                            fileName: "[project]/components/DialogueCarousel.tsx",
                                            lineNumber: 49,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DialogueCarousel.tsx",
                                    lineNumber: 47,
                                    columnNumber: 21
                                }, this),
                                dialogue?.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full relative justify-center items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: dialogue.image,
                                        width: 400,
                                        height: 400,
                                        alt: "picture from user post",
                                        style: {
                                            borderRadius: 15,
                                            height: 200,
                                            objectFit: 'cover'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/DialogueCarousel.tsx",
                                        lineNumber: 53,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/DialogueCarousel.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DialogueCarousel.tsx",
                            lineNumber: 29,
                            columnNumber: 17
                        }, this),
                        dialogue.mentions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full justify-start flex flex-row gap-2 pt-4",
                            children: dialogue.mentions.map((mention)=>{
                                const imageUrl = mention?.movie?.posterPath || mention?.tv?.posterPath ? `${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$tmdbPosterUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posterURLlow"]}/${mention?.movie?.posterPath || mention?.tv?.posterPath}` : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$fallbackImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posterFallback"]; // Make sure this exists in your /public folder
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: imageUrl,
                                        alt: "poster for mentioned movie or tv show",
                                        height: 80,
                                        width: 35,
                                        style: {
                                            borderRadius: 5
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/DialogueCarousel.tsx",
                                        lineNumber: 71,
                                        columnNumber: 33
                                    }, this)
                                }, mention.id, false, {
                                    fileName: "[project]/components/DialogueCarousel.tsx",
                                    lineNumber: 70,
                                    columnNumber: 29
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/DialogueCarousel.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex flex-row  bottom-4 gap-6 justify-start items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-1 justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                            size: 18,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGray
                                        }, void 0, false, {
                                            fileName: "[project]/components/DialogueCarousel.tsx",
                                            lineNumber: 85,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGray
                                            },
                                            children: dialogue.upvotes
                                        }, void 0, false, {
                                            fileName: "[project]/components/DialogueCarousel.tsx",
                                            lineNumber: 86,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DialogueCarousel.tsx",
                                    lineNumber: 84,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-1 justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__["ThumbsDown"], {
                                            size: 18,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGray
                                        }, void 0, false, {
                                            fileName: "[project]/components/DialogueCarousel.tsx",
                                            lineNumber: 89,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGray
                                            },
                                            children: dialogue.downvotes
                                        }, void 0, false, {
                                            fileName: "[project]/components/DialogueCarousel.tsx",
                                            lineNumber: 90,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DialogueCarousel.tsx",
                                    lineNumber: 88,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-1 justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineMessage"], {
                                            size: 18,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGray
                                        }, void 0, false, {
                                            fileName: "[project]/components/DialogueCarousel.tsx",
                                            lineNumber: 93,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGray
                                            },
                                            children: dialogue.comments.length
                                        }, void 0, false, {
                                            fileName: "[project]/components/DialogueCarousel.tsx",
                                            lineNumber: 94,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DialogueCarousel.tsx",
                                    lineNumber: 92,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-1 justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRetweet"], {
                                            size: 18,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGray
                                        }, void 0, false, {
                                            fileName: "[project]/components/DialogueCarousel.tsx",
                                            lineNumber: 97,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].mainGray
                                            },
                                            children: dialogue.downvotes
                                        }, void 0, false, {
                                            fileName: "[project]/components/DialogueCarousel.tsx",
                                            lineNumber: 98,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DialogueCarousel.tsx",
                                    lineNumber: 96,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DialogueCarousel.tsx",
                            lineNumber: 83,
                            columnNumber: 17
                        }, this)
                    ]
                }, dialogue.id, true, {
                    fileName: "[project]/components/DialogueCarousel.tsx",
                    lineNumber: 28,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/DialogueCarousel.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/DialogueCarousel.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
_c = DialogueCarousel;
const __TURBOPACK__default__export__ = DialogueCarousel;
var _c;
__turbopack_context__.k.register(_c, "DialogueCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/appStoreUrl.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "appStoreUrl": (()=>appStoreUrl)
});
const appStoreUrl = "https://apps.apple.com/us/app/bingeable-app-for-film-lovers/id6744092767";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/DownloadButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$appStoreUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/appStoreUrl.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Colors.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const DownloadButton = ()=>{
    const handleClick = ()=>{
        window.open(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$appStoreUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appStoreUrl"], '_blank');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: handleClick,
        className: "w-full  justify-self-center cursor-pointer justify-center items-center text-center font-semibold py-2  flex flex-row gap-1 z-10",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].secondary,
            borderRadius: 30
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaApple"], {
                size: 24,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Colors$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary,
                style: {
                    paddingBottom: 4
                }
            }, void 0, false, {
                fileName: "[project]/components/DownloadButton.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Download iOS App"
            }, void 0, false, {
                fileName: "[project]/components/DownloadButton.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DownloadButton.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_c = DownloadButton;
const __TURBOPACK__default__export__ = DownloadButton;
var _c;
__turbopack_context__.k.register(_c, "DownloadButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_7ba8b98e._.js.map