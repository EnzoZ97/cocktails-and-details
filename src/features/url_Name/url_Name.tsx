import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value : ''
}

export const url_Name_Slice = createSlice({
    name: 'url_Name',
    initialState,
    reducers:{
        updateUrl_Name: (state, action : PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})


export const { updateUrl_Name } = url_Name_Slice.actions;
export default url_Name_Slice.reducer;