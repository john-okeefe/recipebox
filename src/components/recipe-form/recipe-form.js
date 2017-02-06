import React, { Component } from 'react';
import RecipeName from './recipe-name'
import IngredientsInput from './ingredients-input'

 class RecipeForm extends Component {
   constructor(props){
     super(props);
     this.state = {
       "id": "new-item-id"
     }
   }

   render(){
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
}

export default RecipeForm;
