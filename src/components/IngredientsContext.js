import { useContext, useState, createContext, useEffect } from "react";

const IngredientsListContext = createContext([]);
export const useIngredientList = () => {
    return useContext(IngredientsListContext)
}

export const IngredientListProvider = ({ list, children }) => {
    const [ingredientList, setIngredientList] = useState(list)
    useEffect( () => {
                        fetch("http://localhost:3004/Ingredients").then(response => response.json()).then(setIngredientList)
    }, [])
    return (<IngredientsListContext.Provider value={[ingredientList, setIngredientList]}>
        {children}
    </IngredientsListContext.Provider>)
};
