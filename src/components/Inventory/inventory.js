import { useIngredientList } from "../IngredientsContext";
import { IngredientItem } from "../IngredientItem";
export const IngredientList = () => {
    const [ingredientList] = useIngredientList();
    return(
        <div>
            {ingredientList.length === 0 ? (
            <span>No ingredients</span>
            ) : (
                ingredientList.map((ingredient)=> <IngredientItem ingredient={ingredient}></IngredientItem>)
            )}
        </div>
    )
}