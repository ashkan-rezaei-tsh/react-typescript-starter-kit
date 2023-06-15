import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootReducers } from "./reducers/index";

export const store = configureStore({
    reducer: rootReducers,
    devTools: import.meta.env.VITE_MODE_ENV === "development",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* import { AnyAction, configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        isLoggedIn: checkLogin,
        permissions: getPermissions,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend
            //additionalMiddleware,
            //untypedMiddleware as Middleware<(action: Action<'specialAction'>) => number, RootState>
            ()
            .concat
            // logger
            (),
});

export type AppDispatch = typeof store.dispatch;

export default store;

function checkLogin(state: unknown, action: AnyAction): unknown {
    //throw new Error("Function not implemented.");
    return true;
}

function getPermissions(state: unknown, action: AnyAction): unknown {
    //throw new Error("Function not implemented.");
    return true;
}
 */
