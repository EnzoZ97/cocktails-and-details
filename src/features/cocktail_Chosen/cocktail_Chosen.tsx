import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const cocktail_Chosen_Slice = createSlice({
    name : 'Cocktail_Name',
    initialState,
    reducers: {
        setCocktailId: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    }
})

export const { setCocktailId } = cocktail_Chosen_Slice.actions;
export default cocktail_Chosen_Slice.reducer;