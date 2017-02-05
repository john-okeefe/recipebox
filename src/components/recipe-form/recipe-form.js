import React from 'react';
import RecipeName from './recipe-name'
import IngredientsInput from './ingredients-input'

const RecipeForm = (props) => {
  return (
    <div className="recipe-form">
      <h2 className="add-recipe-title">Add a Recipe</h2>
      {/* draw a line here in future */}
      <RecipeName />
      <IngredientsInput />
      {/* draw a line here in future */}
      <div>
        <button>Add Recipe</button>
        <button>Close</button>
      </div>
    </div>
  )
}

export default RecipeForm;
