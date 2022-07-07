import { useShoppingList } from "./ShoppingListContext"
import { useIngredientList } from "./IngredientsContext";
import { useLogin } from "./CocktailList/LoginContext";
import { useInventoryList } from "./Inventory/InventoryContext";



export const IngredientItem = ({ingredient}) => {

    const [userId] = useLogin();
    const [inventoryList, setInventoryList] = useInventoryList();


    const [shoppingList, setShoppingList] = useShoppingList()
    const [ingredientList] = useIngredientList()
    
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
        }).then(response => response.json()).then((shopList) =>{
            setShoppingList(shopList.filter(item=>item.userId === userId))
        })
        
    }
    const removeFromShoppingList = (ingredient) => {
        const shoppingListItem = shoppingList.find(item => item.IngredientId === ingredient.id)
        if (shoppingListItem){
            fetch(`http://localhost:3004/shoppingList/${shoppingListItem.id}`, {method: "DELETE"}).then( () => {
                return fetch("http://localhost:3004/shoppingList")
            }).then(response => response.json()).then((shopList) =>{
                setShoppingList(shopList.filter(item=>item.userId === userId))
            })
        }
    }


    const addToInventory = (ingredient) => {
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
        }).then(response => response.json()).then((inventory) =>{
            setInventoryList(inventory.filter(item=>item.userId === userId))
        });
    }
    const removeFromInventory = (ingredient) => {
        const inventoryListItem = inventoryList.find(item => item.IngredientId === ingredient.id)
        if (inventoryListItem){
            fetch(`http://localhost:3004/inventoryList/${inventoryListItem.id}`, {method: "DELETE"}).then( () => {
                return fetch("http://localhost:3004/inventoryList")
            }).then(response => response.json()).then((invList) =>{
                setInventoryList(invList.filter(item=>item.userId === userId))
            })
        }
    }
    
    const inShoppingList = (ingredient) => shoppingList.some((item) => item.IngredientId === ingredient.id)
    const inInventory = (ingredient) => inventoryList.some((item) => item.IngredientId === ingredient.id)

    return(
        <div>
            <span>{ingredient.Ingredient}</span>
            <div>
            {inShoppingList(ingredient) ? (
            <button onClick={() => removeFromShoppingList(ingredient)}>- Shopping List</button>
            ) : (
                <button onClick={() => addToShoppingList(ingredient)}>+ Shopping List</button>
            )}
            {inInventory(ingredient) ? (
                <button onClick={() => removeFromInventory(ingredient)}>- Inventory</button>
            ) : (
                <button onClick={() => addToInventory(ingredient)}>+ Inventory</button>
            )}
            </div>
            
        </div>
    )
}