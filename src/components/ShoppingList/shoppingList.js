import { useShoppingList } from "../ShoppingListContext"
import { IngredientItem } from "../IngredientItem";
export const ShoppingList = () => {
    const [shoppingList] = useShoppingList();
    return(
        <div>
            {shoppingList.length === 0 ? (
            <span>No ingredients</span>
            ) : (
                shoppingList.map((ingredient)=> <IngredientItem ingredient={ingredient}></IngredientItem>)
            )}
        </div>
    )
}