//define some basic store here  
//import functions to create store
//create store
//export the store or nested functions/reducers

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/organism/counter/state/CounterSlice"

export const store = configureStore({
    reducer: {
        //add slices here
        counter: counterReducer
    }
}); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;