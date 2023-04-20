import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import { fetchAllCocktails } from '../apiCocktails/apiCocktails';
import { Link } from 'react-router-dom';
import { setName } from '../../features/nameOfCocktail/nameOfCocktail';
import { setCocktailId } from '../../features/cocktail_Chosen/cocktail_Chosen';
import { updateUrl_Name } from '../../features/url_Name/url_Name';

import './Cocktails.scss';

const Cocktails = () => {
    const dispatch = useAppDispatch();
    const list = useAppSelector((state) => state.List.value);
    const name = useAppSelector((state) => state.Name.value);
    const [cocktail_Name, setcocktail_Name] = useState('');

    useEffect(() => {
        dispatch(fetchAllCocktails(name));
    },[dispatch]);

    function updateCocktailsList():void{
        dispatch(setName(cocktail_Name));
        dispatch(fetchAllCocktails(cocktail_Name));
    }

    function updateCocktailInfo( id : number, name : string ):void{
        dispatch(setCocktailId(id));
        dispatch(updateUrl_Name(name));
    }

    return (
        <div className="Cocktails mt-5 container-fluid">
            <div className="d-flex justify-content-center">
                <div className="form text-center">
                    <input className="form-control text-center " placeholder="Write a name's cocktail"
                        onChange={(e) => setcocktail_Name(e.target.value)} aria-label='word-input' />
                    <button className="btn mt-3 btn-search " onClick={() => updateCocktailsList()}>Search Cocktail</button>
                </div>
            </div>
            <div className="mt-5 container-fluid d-flex flex-wrap justify-content-center">
                {
                    list.map((elem : any) => (
                        <div className="card m-2  cocktail-box" key={elem.idDrink}>
                            <img src={elem.strDrinkThumb} className="card-img-top" />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h3 className="card-title"> { elem.strDrink } </h3>
                                <Link to={`/${ elem.strDrink }`} >
                                    <button className="btn mt-2 btn-box" onClick={() => updateCocktailInfo(elem.idDrink, elem.strDrink)}>Show cocktail</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cocktails;