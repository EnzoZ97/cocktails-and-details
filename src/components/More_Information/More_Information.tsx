import { useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './More_Information.scss';
import axios from 'axios';
import SyncLoader from "react-spinners/ClipLoader";

const More_Information = () => {
    const NameCocktailChosen = useAppSelector((state) => state.Cocktail_chosen.value);
    const [Details, setDetails] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const ingredients = ( elem : any ) => {
        return (
            <ul className="ingredientsList d-flex justify-content-center flex-wrap">
                {
                    elem.strIngredient1 !== null ? 
                    <li className="ingredient">{elem.strIngredient1}
                    {
                        elem.strIngredient2 === null ? '' : ','
                    }</li>
                    :
                    ''
                }
                {
                    elem.strIngredient2 !== null ? 
                    <li className="ingredient">{elem.strIngredient2}
                    {
                        elem.strIngredient3 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient3 !== null ? 
                    <li className="ingredient">{elem.strIngredient3}
                    {
                        elem.strIngredient4 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient4 !== null ? 
                    <li className="ingredient">{elem.strIngredient4}
                    {
                        elem.strIngredient5 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient5 !== null ? 
                    <li className="ingredient">{elem.strIngredient5}
                    {
                        elem.strIngredient6 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient6 !== null ? 
                    <li className="ingredient">{elem.strIngredient6}
                    {
                        elem.strIngredient7 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient7 !== null ? 
                    <li className="ingredient">{elem.strIngredient7}
                    {
                        elem.strIngredient8 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient8 !== null ? 
                    <li className="ingredient">{elem.strIngredient8}
                    {
                        elem.strIngredient9 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient9 !== null ? 
                    <li className="ingredient">{elem.strIngredient9}
                    {
                        elem.strIngredient10 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient10 !== null ? 
                    <li className="ingredient">{elem.strIngredient10}
                    {
                        elem.strIngredient11 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient11 !== null ? 
                    <li className="ingredient">{elem.strIngredient11}
                    {
                        elem.strIngredient12 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient12 !== null ? 
                    <li className="ingredient">{elem.strIngredient12}
                    {
                        elem.strIngredient13 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient13 !== null ? 
                    <li className="ingredient">{elem.strIngredient13}
                    {
                        elem.strIngredient14 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient14 !== null ? 
                    <li className="ingredient">{elem.strIngredient14}
                    {
                        elem.strIngredient15 === null ? '' : ','
                    }
                    </li>
                    :
                    ''
                }
                {
                    elem.strIngredient15 !== null ? 
                    <li className="ingredient">{elem.strIngredient15}</li>
                    :
                    ''
                }                

            </ul>
        )
    }

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${NameCocktailChosen}`)
        .then((response) => {
            setDetails(response.data.drinks);
            setisLoading(false);
        })
    },[]);

    return(
        <div className="container-fuild">
            <div className="d-flex justify-content-center ">
                {
                    isLoading === true 
                    ? 
                    <div className="spinner">
                        <SyncLoader
                        color="#D61C4E"
                        size={50}
                        />
                    </div>
                    :   

                    Details.map((elem : any) => (
                        <div className="card box-content mt-3 mb-3 text-center" key={elem.idDrink}>
                            <h1 className="cart-title title"> { elem.strDrink } </h1>
                            <img  src={elem.strDrinkThumb} className="card-img image" />
                            <div className="cart-body mt-3">
                                <div className="ingredients d-flex flex-column justify-content-center">
                                    <p className="ingredients-title ">Ingredients</p>
                                    {
                                        ingredients(elem)
                                    }
                                </div>
                                <div className="instructions d-flex flex-column justify-content-center">
                                    <p className="instructions-title">How prepare it?</p>
                                    <p className="cart-text instruction"> { elem.strInstructions } </p>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto mb-3">
                                <Link to='/' className="Link">
                                    <button className="btn btn-go-back ">Go back</button>    
                                </Link>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default More_Information;