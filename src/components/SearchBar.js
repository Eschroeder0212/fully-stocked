import { useState } from "react";
import cocktails from "../assets/cocktails.json"
import { CocktailCard } from "./CocktailCard";

export const SearchBar = () => {
    const [filteredItems, setFilteredItems] = useState(cocktails.Drinks)
    const getFilteredItems = (query) => {
        if (query.length === 0) {
            return cocktails.Drinks
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
                {filteredItems.map(item => <CocktailCard key={item.Name} cocktail={item} />)}
            </ul>
        </div>
    );

} 