import axios from "axios";
import { setCocktailsList } from "../../features/cocktailsList/cocktailsList";


export const fetchAllCocktails = ( name: string ) => (dispatch : any) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => {
        dispatch(setCocktailsList(response.data.drinks));
    })
    .catch((error) => dispatch(setCocktailsList([])));
} 
