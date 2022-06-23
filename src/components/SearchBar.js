import { useState } from "react";
import cocktails from "../assets/cocktails.json"
import { DrinkCard } from "./DrinkCards";

export const SearchBar = () => {
    const [filteredItems, setFilteredItems] = useState([])
    const getFilteredItems = (query) => {
        if (query.length === 0) {
            return []
        }
        return cocktails.Drinks.filter(cocktail => cocktail.Name.toLowerCase().includes(query.toLowerCase()))
             
    }
    
    return (
        <div>
            
            <label className="searchBar">search</label>
            <input type="text" onChange={(evt) => {
                setFilteredItems(getFilteredItems(evt.target.value))
            }} />
            <ul>
            
                {filteredItems.map((item) =>
                
                 <DrinkCard key={item.Name}
                 cocktail={item}
                 />)}
                 
                
                
            </ul>
        </div>
    );

} 