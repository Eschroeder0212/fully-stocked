import { IngredientItem } from "./IngredientItem"

export const CocktailCard = ({cocktail}) => {
    return(
        <div>
        <div className="cocktail-img">
            <img
                className="contain-fit"
                src={`/cocktailImages/${cocktail.Name}.jpg`}
                width="300"
                alt={`${cocktail.Name}`}
            />
        </div>
        <h3>{cocktail.Name}</h3>
        {cocktail.Ingredients.map( (ingredient) => {
            return <IngredientItem key={ingredient.Ingredient} ingredient={ingredient.Ingredient}/>
        } )}
        </div>
    )
}