import React, { useContext } from "react"
import cocktails from "../../assets/cocktails.json"
import { useIngredientList } from "../IngredientsContext"
import { useShoppingList } from "../ShoppingListContext"
import { useNavigate } from "react-router-dom";

export const CocktailList = () => {
    const [ingredientList, setIngredientList] = useIngredientList()
    const [shoppingList, setShoppingList] = useShoppingList()
    const addToShoppingList = (ingredient) => {
        const newList = [...shoppingList, ingredient];

        setShoppingList(newList);
        console.log(newList);
    }
    const addToInventory = (ingredient) => {
        const newList = [...ingredientList, ingredient];
        setIngredientList(newList);
        console.log(newList);
        
    }
    return (

        <div className="container cocktails-list">
            <div className="row">
                {cocktails.Drinks.map(function (cocktail) {
                   
                 return (
                <>
                <div key={cocktail}>

                {cocktailImageDisplay(cocktail.Name)}
                <div>
                Name: {cocktail.Name}
                </div>
                                                             
                <div>
                {cocktail.Ingredients.map ((ingredient) => {
                return ( 
                 <>
                <div key={ingredient}>
                <button onClick = {()=> addToInventory(ingredient.Ingredient)}>+ inventory</button>
                Ingredients:{ingredient.Ingredient}
                Measurement: {ingredient.Measurement}
                <button onClick = {()=> addToShoppingList(ingredient.Ingredient)}>+ shopping list</button>
                </div>
                </>
                )
                                        
                })
                                    
                }
                                       
                </div>                  
                <div>
                Method: {cocktail.Method}
                </div>
                <div>
                Garnish: {cocktail.Garnish}
                </div>
                </div>
                </>
                )




                }
                )
                }
            </div>
        </div>
    )

}

export const cocktailImageDisplay = (Name) => {
    return(
        <div className="cocktail-img">
            <img 
            className="contain-fit"
            src={`/cocktailImages/${Name}.jpg`} 
            width="300"
            alt = {`${Name}`}
            />
        </div>
    )
}