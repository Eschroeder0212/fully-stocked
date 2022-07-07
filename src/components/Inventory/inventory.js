import { useIngredientList } from "../IngredientsContext";
import { IngredientItem } from "../IngredientItem";
import { useInventoryList } from "./InventoryContext";
import { useLogin } from "../CocktailList/LoginContext";
import { Navigate } from "react-router-dom"

export const IngredientList = () => {
    const [userId] = useLogin();
    const [ingredientList] = useIngredientList();
    const [inventoryList] = useInventoryList();
    const relevantIngredients = ingredientList.filter(item => inventoryList.some(inventoryItem => inventoryItem.IngredientId === item.id))
    if(userId === 0) return <Navigate to= "/"></Navigate>
    return(
        <div>
            {ingredientList.length === 0 ? (
            <span>No ingredients</span>
            ) : (
                relevantIngredients.map((ingredient)=> <IngredientItem ingredient={ingredient}></IngredientItem>)
            )}
        </div>
    )
}