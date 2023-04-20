import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value : ''
}

export const NameSlice = createSlice({
    name: 'NameSlice',
    initialState,
    reducers:{
        setName: (state, action : PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const { setName } = NameSlice.actions;
export default NameSlice.reducer;