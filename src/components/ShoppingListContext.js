import { useContext, useState, createContext } from "react";

const ShoppingListContext = createContext([]);
export const useShoppingList = () => {
    return useContext(ShoppingListContext)
}

export const ShoppingListProvider = ({ list, children }) => {
    const [shoppingList, setShoppingList] = useState(list)
    return (<ShoppingListContext.Provider value={[shoppingList, setShoppingList]}>
        {children}
    </ShoppingListContext.Provider>)
}
