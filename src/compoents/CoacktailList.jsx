import Wrapper from "../assets/wrappers/CocktailList";
import CoacktailCard from './CoacktailCard'

const CoacktailList = ({drinks}) => {
    // console.log(drinks)
    if(!drinks){
        return <h4 style={{textAlign: 'center'}}>Search about your drink .....</h4>
    }
    
    // TO STRUCTURE THE DATA OF THE DRINKS

    const formatingDrinks =drinks.map((drink)=>{
        // console.log(drink)
        const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink;
        return{id:idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass }
    })

    return (
    <Wrapper>
        {formatingDrinks.map((item)=>{
            const {id, name, image, info, glass} = item;
            return<CoacktailCard key={id} {...item}/>
        })}
    </Wrapper>
  )
}
export default CoacktailList


// {drinks.map((item)=>{
//         const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item
//         console.log(idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass)
//     })}