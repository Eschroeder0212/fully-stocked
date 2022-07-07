import { useContext, useState, createContext, useEffect } from "react";
import { useLogin } from "../CocktailList/LoginContext";

const InventoryListContext = createContext([]);
export const useInventoryList = () => {
    return useContext(InventoryListContext)
}

export const InventoryListProvider = ({ list, children }) => {
    const [userId] = useLogin()
    const [inventoryList, setInventoryList] = useState(list)
    useEffect( () => {
        fetch("http://localhost:3004/inventoryList").then(response => response.json()).then( (inventory) =>{
            setInventoryList(inventory.filter(item=>item.userId === userId))
        })
        }, [])
    return (<InventoryListContext.Provider value={[inventoryList, setInventoryList]}>
        {children}
    </InventoryListContext.Provider>)
}
