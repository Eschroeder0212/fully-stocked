import { useContext, useState, createContext } from "react";

const IngredientsListContext = createContext([]);
export const useIngredientList = () => {
    return useContext(IngredientsListContext)
}

export const IngredientListProvider = ({list, children}) => {
    const [ingredientList, setIngredientList] = useState(list)
return (<IngredientsListContext.Provider value={[ingredientList, setIngredientList]}>
{children}
    </IngredientsListContext.Provider>)
};
