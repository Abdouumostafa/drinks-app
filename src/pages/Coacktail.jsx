import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";


const singleCoacktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
 
export const loader = async ({params})=>{
  const {id} = params;
  // console.log(params, id)
  const {data} = await axios.get(`${singleCoacktailUrl}${id}`)
  // console.log(data)
  return {data, id};
}

const Coacktail = () => {
  const {data,id} = useLoaderData();
  const singleDrinkDetails = data.drinks[0];
  const {strDrink: name, strDrinkThumb: image, strAlcoholic:info, strCategory: category, strGlass: glass, strInstructions: instructions } = singleDrinkDetails;

  const validIngredients = Object.keys(singleDrinkDetails).filter((key)=> key.startsWith('strIngredient') && singleDrinkDetails[key] !== null).map((value)=> singleDrinkDetails[value])
  
  return (
    <Wrapper>
      <header>
        <Link to='/' className="btn">back home</Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span> {name}
          </p>
          <p>
            <span className="drink-data">category:</span> {category}
          </p>
          <p>
            <span className="drink-data">info:</span> {info}
          </p>
          <p>
            <span className="drink-data">glass:</span> {glass}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span> {validIngredients.map((item , index) =>{
              return <span className="ing" key={index}>
                {item} {index < validIngredients.length - 1? ',' : ''}  
              </span>
            })}
          </p>
          <p>
            <span className="drink-data">instructions:</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Coacktail
