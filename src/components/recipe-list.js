import React from 'react';
import Recipe from './recipe'

const RecipeList = (props) => {
  return (
    <div>
      {props.recipes.map(x => {
        return (
          <div key={x.id}>
            <div>{x.recipeName}</div>
            <Recipe ingredients={x.ingredients} />
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList;
