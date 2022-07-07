import { useContext, useState, createContext, useEffect } from "react";
import { useLogin } from "./CocktailList/LoginContext";

const ShoppingListContext = createContext([]);
export const useShoppingList = () => {
    return useContext(ShoppingListContext)
}

export const ShoppingListProvider = ({ list, children }) => {
    const [userId] = useLogin()
    const [shoppingList, setShoppingList] = useState(list)
    useEffect( () => {
        fetch("http://localhost:3004/Ingredients").then(response => response.json()).then( (shopList) =>{
            setShoppingList(shopList.filter(item=>item.userId === userId))
        })
        }, [])
    return (<ShoppingListContext.Provider value={[shoppingList, setShoppingList]}>
        {children}
    </ShoppingListContext.Provider>)
}
