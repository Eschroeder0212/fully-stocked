import './App.css';
import { IngredientListProvider } from './components/IngredientsContext.js';
import { ShoppingListProvider } from './components/ShoppingListContext.js';
import { ShoppingList } from './components/ShoppingList/shoppingList';
import { Login } from './components/CocktailList/logInReg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchBar } from './components/SearchBar';
import { NavBar } from './components/NavBar';
import { IngredientList } from './components/Inventory/inventory';
import { AvailableCocktails } from './components/AvailableCocktails';
import { LoginProvider } from './components/CocktailList/LoginContext';
import { InventoryListProvider } from './components/Inventory/InventoryContext';
import { ChangePassword } from './components/changePassword';
function App() {
  return (
    <div className="App">
      <LoginProvider>
        <IngredientListProvider list={[]}>
          <ShoppingListProvider list={[]}>
            <InventoryListProvider>
              <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                  <Route index element={<Login />} />
                  <Route path="/cocktails" element={<SearchBar />} />
                  <Route path="/shopping" element={<ShoppingList />} />
                  <Route path="/inventory" element={<IngredientList />} />
                  <Route path="/available" element={<AvailableCocktails />} />
                  <Route path="/changePassword" element={<ChangePassword />} />
                </Routes>
              </BrowserRouter>
            </InventoryListProvider>
          </ShoppingListProvider>
        </IngredientListProvider>

      </LoginProvider>

    </div>

  );
}

export default App;


