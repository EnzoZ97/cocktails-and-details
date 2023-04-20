import { configureStore } from '@reduxjs/toolkit';
import { ListSlice } from '../features/cocktailsList/cocktailsList';
import { NameSlice } from '../features/nameOfCocktail/nameOfCocktail';
import { cocktail_Chosen_Slice } from '../features/cocktail_Chosen/cocktail_Chosen';
import { url_Name_Slice } from '../features/url_Name/url_Name';

export const store = configureStore({
  reducer: {
    List: ListSlice.reducer,
    Name: NameSlice.reducer,
    Cocktail_chosen : cocktail_Chosen_Slice.reducer,
    url_Name: url_Name_Slice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

