import { cocktailImageDisplay } from "./CocktailList/cocktailList";

export const DrinkCard = ({ cocktail }) => {
   
        
       
            return (
                <>
                {cocktailImageDisplay(cocktail.Name)}
                <div>
                    <h3>{cocktail.Name}</h3>
                    <h4>Ingredients</h4>
                    <ul>
                        {cocktail.Ingredients.map((ingredient) => (
                            <li key={ingredient.Ingredient}>
                                {ingredient.Measurement} - {ingredient.Ingredient}
                            </li>
                        ))}
                    </ul>
                    <h4>Method</h4>
                    <p>{cocktail.Method}</p>
                    <p>Garnish with: {cocktail.Garnish}</p>
                </div>
                

                </>
            )
          
     
        
};

            
        
    

