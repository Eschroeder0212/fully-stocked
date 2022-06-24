import { useContext, useState, createContext } from "react";
import { Route } from "react-router-dom"
import { useIngredientList } from "../IngredientsContext"
import { useShoppingList } from "../ShoppingListContext"
import { CocktailList } from "./CocktailList/cocktailList";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/inventory">
                <CocktailList />
            </Route>
        </>
    )
}