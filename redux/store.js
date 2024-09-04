import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "./slice/authSlice"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/es/persistStore"
import cartSlice from "./slice/cartSlice"

const rootReducer = combineReducers({ user: authReducer, cart: cartSlice })
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export const persistor = persistStore(store)