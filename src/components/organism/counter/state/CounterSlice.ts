// create slice here
import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
}

const counterInitialState: CounterState = {
    value: 0
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const {increment,decrement} = CounterSlice.actions // export b/c use in file globally
export default CounterSlice.reducer // export b/c use in store file