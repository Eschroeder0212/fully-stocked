import { useEffect, useState } from "react";
import { CocktailCard } from "./CocktailCard";
import { useLogin } from "./CocktailList/LoginContext";
import { useIngredientList } from "./IngredientsContext";
import { Navigate } from "react-router-dom";

export const SearchBar = () => {
    const [userId] = useLogin()
    
    const [ingredients] = useIngredientList()
    const [cocktails, setCocktails] = useState([])
    const [cocktailIngredients, setCocktailIngredients] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    const getData = async () => {
        await fetch("http://localhost:3004/DrinkIngredients").then(response => response.json()).then(setCocktailIngredients)
        await fetch("http://localhost:3004/Drinks").then(response => response.json()).then(setCocktails)
    }

    useEffect(() => {
        getData()
    }, [])



const assembleCocktail = (cocktail) => {
    const relevantIngredients = (cocktailIngredients
    .filter(cocktailIngredient => cocktailIngredient.drinkId === cocktail.id)
    .map(cocktailIngredient => ingredients.find(ingredient => ingredient.id === cocktailIngredient.IngredientID)))
    console.log(relevantIngredients)
    return relevantIngredients
}


    const getFilteredItems = () => {
        if (searchQuery.length === 0) {
            return cocktails
        }
        return cocktails.filter(cocktail => cocktail.Name.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    if(userId === 0) return <Navigate to= "/"></Navigate>
    return (
        <div>
            <label className="searchBar">search</label>
            <input type="text" onChange={(evt) => {
                setSearchQuery(evt.target.value)
            }} />
            <ul>
                {getFilteredItems().map(item => <CocktailCard
                key={item.Name}
                cocktail={item}
                ingredients={assembleCocktail(item)}
                drinkIngredients = {cocktailIngredients
                    .filter(cocktailIngredient => cocktailIngredient.drinkId === item.id)}

                />)}
            </ul>
        </div>
    );

} 