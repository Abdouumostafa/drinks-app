import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CoacktailList from "../compoents/CoacktailList";
import SearchForms from '../compoents/SearchForms'
const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ({request})=>{
  const url  = new URL(request.url)
  
  // const searchTerm = url.searchParams.get('search') || ''; 
  const searchTerm = url.searchParams.get('search' || ''); 

  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return{drinks: response.data.drinks, searchTerm};
}

const Landing = () => {
  const {drinks, searchTerm} = useLoaderData();
  return (
    <>
      <SearchForms searchTerm={searchTerm}/>
      <CoacktailList drinks={drinks}/>
    </>
  )
}
export default Landing