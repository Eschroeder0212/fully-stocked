import React, { useState } from 'react';
import { useIngredientList } from '../IngredientsContext';







export const MyInventory = () => {
    const [ingredientList,] = useIngredientList()
    return (
        <h1>My Bar</h1>


    )
}

