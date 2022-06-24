import logo from './logo.svg';
import './App.css';
import { CocktailList } from './components/CocktailList/cocktailList.js';
import { IngredientListProvider } from './components/IngredientsContext.js';
import { ShoppingListProvider } from './components/ShoppingListContext.js';
import { Login } from './components/CocktailList/logInReg';
import { MyBar } from './components/Inventory/Inventory';
import { useState } from 'react';
import reactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchBar } from './components/SearchBar';
import { DrinkCard } from './components/DrinkCards';



function App() {
  return (
    <div className="App">

  <ShoppingListProvider  list={[]}>
    <IngredientListProvider list={[]}>
      <SearchBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/cocktails" element={<CocktailList />} />
          <Route path="/inventory" element={<MyBar />} />
        </Routes>
      </BrowserRouter>
      </SearchBar>
    </IngredientListProvider>
  </ShoppingListProvider>

</div>

  );
}

export default App;


