import { configureStore } from "@reduxjs/toolkit";
import EventReducer from "../Features/Events/EventSlice";
import AuthReducer from '../Features/Auth/AuthSlice';
import {persistStore,persistReducer} from "redux-persist";
import  storage  from "redux-persist/lib/storage";
import AllEventReducer from '../Features/Events/AllEventSlice'

const persistConfig={
    key:'ems-user',
    storage
}

const persistAuthReducer=persistReducer(persistConfig,AuthReducer)

export const store=configureStore({
    reducer:{
        events:EventReducer,
        allEvents:AllEventReducer,
        // auth:AuthReducer,
        auth:persistAuthReducer
    }
})

export const persistedStore=persistStore(store);
