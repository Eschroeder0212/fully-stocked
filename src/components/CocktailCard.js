import { IngredientItem } from "./IngredientItem"

export const CocktailCard = ({cocktail, ingredients, drinkIngredients}) => {
    return(
        <div className="cocktail-card">
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
            ingredient= {ingredients.find(ingredient => ingredient.id === drinkIngredient.IngredientID)} />
            </>
            )
        } )}
                <h4>Method</h4>
                    <p>{cocktail.Method}</p>
                    <p>Garnish with: {cocktail.Garnish}</p>
                
        </div>
    )
}