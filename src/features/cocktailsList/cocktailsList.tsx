import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    value: []
}

export const ListSlice = createSlice({
    name: 'List',
    initialState,
    reducers:{
        setCocktailsList: (state, action : PayloadAction<[]>) => {
            state.value = action.payload;
        }
    }
})

export const { setCocktailsList } = ListSlice.actions;

export default ListSlice.reducer;