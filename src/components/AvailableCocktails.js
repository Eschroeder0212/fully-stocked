import { CocktailCard } from "./CocktailCard";
import { useIngredientList } from "./IngredientsContext";
import { Navigate } from "react-router-dom"
import { useLogin } from "./CocktailList/LoginContext";
import { useInventoryList } from "./Inventory/InventoryContext";
import { useState, useEffect } from "react"




export const AvailableCocktails = () => {
    const [userId] = useLogin()
    const [inventoryList] = useInventoryList();
    const [ingredientList] = useIngredientList()
    const [cocktails, setCocktails] = useState([])
    const [cocktailIngredients, setCocktailIngredients] = useState([])
    const getData = async () => {
        await fetch("http://localhost:3004/DrinkIngredients").then(response => response.json()).then(setCocktailIngredients)
        await fetch("http://localhost:3004/Drinks").then(response => response.json()).then(setCocktails)
    }

    const assembleCocktail = (cocktail) => {
        const relevantIngredients = (cocktailIngredients
        .filter(cocktailIngredient => cocktailIngredient.drinkId === cocktail.id)
        .map(cocktailIngredient => ingredientList.find(ingredient => ingredient.id === cocktailIngredient.IngredientID)))
        console.log(relevantIngredients)
        return relevantIngredients
    }
    useEffect(() => {
        getData()
    }, [])
    const available = cocktails.filter((cocktail) => {
        const relevantCocktailIngredients = cocktailIngredients.filter(ci => ci.drinkId === cocktail.id)
        const hasAllIngredients = relevantCocktailIngredients.every(ci =>  inventoryList.some(item => item.IngredientId === ci.IngredientID))
        return hasAllIngredients
    })
    if(userId === 0) return <Navigate to= "/"></Navigate>
    return(
        <div>
            {available.length === 0 ? (
            <span>No available cocktails</span>
            ) : (
                available.map((cocktail)=> <CocktailCard cocktail={cocktail} ingredients={assembleCocktail(cocktail)} drinkIngredients = {cocktailIngredients.filter(ingredient => ingredient.drinkId === cocktail.id)}></CocktailCard>)
            )}
        </div>
    )
}
