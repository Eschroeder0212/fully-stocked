import { useShoppingList } from "./ShoppingListContext"
import { useIngredientList } from "./IngredientsContext";
export const IngredientItem = ({ingredient}) => {

    const [shoppingList, setShoppingList] = useShoppingList()
    const [ingredientList, setIngredientList] = useIngredientList()

    const addToShoppingList = (ingredient) => {
        const newList = [...shoppingList, ingredient];
        setShoppingList(newList);
    }
    const removeFromShoppingList = (ingredient) => {
        const newList = shoppingList.filter((item)=> item !== ingredient)
        setShoppingList(newList);
    }
    const addToIngredientList = (ingredient) => {
        const newList = [...ingredientList, ingredient];
        setIngredientList(newList);
    }
    const removeFromIngredientList = (ingredient) => {
        const newList = ingredientList.filter((item)=> item !== ingredient)
        setIngredientList(newList);
    }
    const inShoppingList = shoppingList.some((item) => item === ingredient)
    const inIngredientList = ingredientList.some((item) => item === ingredient)

    return(
        <div>
            <span>{ingredient}</span>
            <div>
            {inShoppingList ? (
            <button onClick={() => removeFromShoppingList(ingredient)}>- Shopping List</button>
            ) : (
                <button onClick={() => addToShoppingList(ingredient)}>+ Shopping List</button>
            )}
            {inIngredientList ? (
                <button onClick={() => removeFromIngredientList(ingredient)}>- Inventory</button>
            ) : (
                <button onClick={() => addToIngredientList(ingredient)}>+ Inventory</button>
            )}
            </div>
            
        </div>
    )
}