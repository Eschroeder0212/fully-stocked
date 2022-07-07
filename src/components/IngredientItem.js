import { useShoppingList } from "./ShoppingListContext"
import { useIngredientList } from "./IngredientsContext";
import { useLogin } from "./CocktailList/LoginContext";
export const IngredientItem = ({ingredient}) => {

    const [userId] = useLogin();


    const [shoppingList, setShoppingList] = useShoppingList()
    const [ingredientList, setIngredientList] = useIngredientList()

    const addToShoppingList = (ingredient) => {
        const newShoppingListItem = {
            userId, 
            IngredientId: ingredient.id

        }

        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(newShoppingListItem)

        }
        fetch("http://localhost:3004/shoppingList", postOptions).then( () => {
            return fetch("http://localhost:3004/shoppingList")
        }).then(response.json()).then(setShoppingList)
        
    }
    const removeFromShoppingList = (ingredient) => {
        const newList = shoppingList.filter((item)=> item !== ingredient)
        setShoppingList(newList);
    }
    const addToIngredientList = (ingredient) => {
        const newInventoryItem = {
            userId, 
            IngredientId: ingredient.id

        }

        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(newInventoryItem)

        }
        fetch("http://localhost:3004/inventoryList", postOptions).then( () => {
            return fetch("http://localhost:3004/inventoryList")
        }).then(response.json()).then(setIngredientList);
    }
    const removeFromIngredientList = (ingredient) => {
        const newList = ingredientList.filter((item)=> item !== ingredient)
        setIngredientList(newList);
    }
    const inShoppingList = shoppingList.some((item) => item === ingredient)
    const inIngredientList = ingredientList.some((item) => item === ingredient)

    return(
        <div>
            <span>{ingredient.Ingredient}</span>
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