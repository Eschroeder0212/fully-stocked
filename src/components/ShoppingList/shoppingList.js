import { useShoppingList } from "../ShoppingListContext"
import { IngredientItem } from "../IngredientItem";
import { useIngredientList } from "../IngredientsContext";
import { useLogin } from "../CocktailList/LoginContext";
import { Navigate } from "react-router-dom"


export const ShoppingList = () => {
    const [userId] = useLogin();
    const [shoppingList] = useShoppingList();
    const [ingredientList] = useIngredientList();
    const relevantIngredients = ingredientList.filter(item => shoppingList.some(shopItem => shopItem.IngredientId === item.id))
    if(userId === 0) return <Navigate to= "/"></Navigate>
    return(
        <div>
            {shoppingList.length === 0 ? (
            <span>No ingredients</span>
            ) : (
                relevantIngredients.map((ingredient)=> <IngredientItem ingredient={ingredient}></IngredientItem>)
            )}
        </div>
    )
}