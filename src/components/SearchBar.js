import { useState } from "react";
import { CocktailList } from "./CocktailList/cocktailList";


const getFilteredItems = (query, items) => {
    if (!query){
        return items;
    }
    return items.filter(cocktail => cocktail.name.includes(query))
}

export const SearchBar = () => {
    const [query, setQuery] = useState("");

    const {cocktails} = CocktailList
    const {items} = cocktails

    const filteredItems = getFilteredItems(query, items);
    return (
        <div>
            <label className="searchBar">search</label>
            <input type="text" onChange={evt => setQuery(evt.target.value)} />
            <ul>
                {filteredItems.map(value => <h3 key={value.name}></h3>)}
            </ul>
        </div>
    );

} 