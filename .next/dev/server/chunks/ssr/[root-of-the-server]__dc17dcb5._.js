module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/context/CarContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarProvider",
    ()=>CarProvider,
    "useCarContext",
    ()=>useCarContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// Initial mock data
const initialCars = [
    {
        id: "1",
        make: "Mercedes-Benz",
        model: "E-Class",
        year: 2021,
        price: 4500000,
        mileage: 45000,
        location: "Mumbai, MH",
        image: "https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3Njg5NjYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Luxury sedan with premium leather interior, advanced safety features, and impeccable maintenance history.",
        condition: "Excellent",
        fuelType: "Diesel",
        transmission: "Automatic"
    },
    {
        id: "2",
        make: "Jeep",
        model: "Grand Cherokee",
        year: 2020,
        price: 3800000,
        mileage: 68000,
        location: "Bangalore, KA",
        image: "https://images.unsplash.com/photo-1708148246994-b7b3c818090d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjB2ZWhpY2xlfGVufDF8fHx8MTc2ODk2NDUyNXww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "4WD SUV perfect for adventures. Loaded with technology and comfort features for the whole family.",
        condition: "Good",
        fuelType: "Diesel",
        transmission: "Automatic"
    },
    {
        id: "3",
        make: "Porsche",
        model: "911 Carrera",
        year: 2019,
        price: 12000000,
        mileage: 29000,
        location: "Delhi, DL",
        image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY4OTczNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Iconic sports car with legendary performance. One owner, pristine condition, full service records.",
        condition: "Excellent",
        fuelType: "Petrol",
        transmission: "Automatic"
    },
    {
        id: "4",
        make: "Ford",
        model: "Endeavour",
        year: 2022,
        price: 3600000,
        mileage: 24000,
        location: "Hyderabad, TG",
        image: "https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNrdXAlMjB0cnVja3xlbnwxfHx8fDE3Njg5NzM2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "High-performance off-road SUV. Perfect blend of utility and adventure capability.",
        condition: "Excellent",
        fuelType: "Diesel",
        transmission: "Automatic"
    },
    {
        id: "5",
        make: "Tesla",
        model: "Model 3",
        year: 2023,
        price: 4500000,
        mileage: 12000,
        location: "Pune, MH",
        image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhcnxlbnwxfHx8fDE3Njg4NzIxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Electric sedan with autopilot, long range battery, and cutting-edge technology. Like new condition.",
        condition: "Excellent",
        fuelType: "Electric",
        transmission: "Automatic"
    }
];
const CarContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CarProvider({ children }) {
    const [cars, setCars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hasLoaded, setHasLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem("ambidrive_cars");
        if (saved) {
            try {
                setCars(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse cars from localStorage", e);
                setCars(initialCars);
            }
        } else {
            setCars(initialCars);
        }
        setHasLoaded(true);
    }, []);
    // Save to localStorage on change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hasLoaded) {
            localStorage.setItem("ambidrive_cars", JSON.stringify(cars));
        }
    }, [
        cars,
        hasLoaded
    ]);
    const addCar = (carData)=>{
        const newCar = {
            ...carData,
            id: Date.now().toString()
        };
        setCars((prev)=>[
                ...prev,
                newCar
            ]);
    };
    const editCar = (updatedCar)=>{
        setCars((prev)=>prev.map((car)=>car.id === updatedCar.id ? updatedCar : car));
    };
    const deleteCar = (id)=>{
        setCars((prev)=>prev.filter((car)=>car.id !== id));
    };
    if (!hasLoaded) {
        return null; // Or a loading spinner
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarContext.Provider, {
        value: {
            cars,
            addCar,
            editCar,
            deleteCar
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/CarContext.tsx",
        lineNumber: 149,
        columnNumber: 9
    }, this);
}
function useCarContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CarContext);
    if (context === undefined) {
        throw new Error("useCarContext must be used within a CarProvider");
    }
    return context;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dc17dcb5._.js.map