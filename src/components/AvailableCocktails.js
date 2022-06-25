import cocktails from "../assets/cocktails.json"
import { CocktailCard } from "./CocktailCard";
import { useIngredientList } from "./IngredientsContext";
export const AvailableCocktails = () => {
    const [ingredientList] = useIngredientList()
    const available = cocktails.Drinks.filter((cocktail) => {
        // only return cocktails which have all ingredients included in inventory
        return cocktail.Ingredients.every((ingredient) => ingredientList.includes(ingredient.Ingredient))
    })
    return(
        <div>
            {available.length === 0 ? (
            <span>No available cocktails</span>
            ) : (
                available.map((cocktail)=> <CocktailCard cocktail={cocktail}></CocktailCard>)
            )}
        </div>
    )
}
