import logo from './logo.svg';
import './App.css';
import { CocktailList } from './components/CocktailList/cocktailList.js'
import { IngredientListProvider } from './components/IngredientsContext.js'
import { ShoppingListProvider } from './components/ShoppingListContext.js'
import { NavBar } from './components/NavBar';
import { SearchBar } from './components/SearchBar';
import { useState } from 'react'


function App() {
  return (
    <div className="App">

<NavBar>
<SearchBar>
<ShoppingListProvider  list={[]}>
<IngredientListProvider list={[]}>

<CocktailList></CocktailList>

</IngredientListProvider>
</ShoppingListProvider>
</SearchBar>
</NavBar>
   

    </div>

  );
}

export default App;


