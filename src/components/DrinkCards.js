import { useIngredientList } from "./IngredientsContext"
import { cocktailImageDisplay } from "./CocktailList/cocktailList";
import { useShoppingList } from "./ShoppingListContext"
import React, { useContext } from "react"


export const DrinkCard = ({ cocktail }) => {

    const [ingredientList, setIngredientList] = useIngredientList();
    const [shoppingList, setShoppingList] = useShoppingList();

    const addToShoppingList = (ingredient) => {
        const newList = [...shoppingList, ingredient];

        setShoppingList(newList);
        console.log(newList);
    }
    const addToInventory = (ingredient) => {
        const newList = [...ingredientList, ingredient];
        setIngredientList(newList);
    }

   
        
       
            return (
                <>
                {cocktailImageDisplay(cocktail.Name)}
                <div>
                    <h3>{cocktail.Name}</h3>
                    <h4>Ingredients</h4>
                    <ul>
                        {cocktail.Ingredients.map((ingredient) => (
                            <li key={ingredient.Ingredient}>
                                 <button onClick={() => addToInventory(ingredient.Ingredient)}>+ inventory</button>
                                {ingredient.Measurement} - {ingredient.Ingredient}
                                <button onClick={() => addToShoppingList(ingredient.Ingredient)}>+ shopping list</button>
                            </li>
                        ))}
                    </ul>
                    <h4>Method</h4>
                    <p>{cocktail.Method}</p>
                    <p>Garnish with: {cocktail.Garnish}</p>
                </div>
                

                </>
            )
          
     
        
};

            
        
    

