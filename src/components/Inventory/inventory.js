import React, { useState } from 'react';
import cocktails from "../../assets/cocktails.json"

export const myInventory = () => {
    return (
        <h1>My Bar</h1>
    )
}

export function deleteFromInventory() {
    const [ingredientList, setIngredientList] = React.useState(arr);
  
    const deleteItem = (index) => () =>
      setItems((items) => items.filter((_, i) => i !== index));
  
    return (
      <>
        {items.map((it, index) => {
          return (
            <div key={it.id}>
              {it.name} <button onClick={deleteItem(index)}>delete</button>
            </div>
          );
        })}
      </>
    );
  }