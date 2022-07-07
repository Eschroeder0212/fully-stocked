import { IngredientItem } from "./IngredientItem"

export const CocktailCard = ({cocktail, ingredients, drinkIngredients}) => {
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
        {drinkIngredients.map( (drinkIngredient) => {
            return (<> <p>{drinkIngredient.Measurement}</p><IngredientItem key={drinkIngredient.id} 
            ingredient={ingredients.includes(undefined) ? ingredients.find(ingredient => ingredient.id === drinkIngredient.IngredientID).Ingredient : ""} />
            </>
            )
        } )}
                <h4>Method</h4>
                    <p>{cocktail.Method}</p>
                    <p>Garnish with: {cocktail.Garnish}</p>
                
        </div>
    )
}