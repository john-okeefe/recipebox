import React, { Component } from 'react';
// import RecipeName from './recipe-name'
// import IngredientsInput from './ingredients-input'

let ingredientList;

 class RecipeForm extends Component {
   constructor(props){
     super(props);
     this.state = {
       recipe: "",
       ingredients: []
     }

     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   render(){
     return (
       <form onSubmit={this.handleSumit} className="recipe-form">
         {console.log(this.state)}
         <h2 className="add-recipe-title">Add a Recipe</h2>
         {/* draw a line here in future */}
         <div>
          <strong>Recipe</strong>
          <input name="recipe" onChange={this.handleInputChange} value={this.state.recipe} />
        </div>
         <div>
          <strong>Ingredients</strong>
          <input name="ingredients" onChange={this.handleInputChange} value={this.state.ingredients} />
        </div>
         {/* draw a line here in future */}
         <div>
           <button type="submit" value="Submit">Add Recipe</button>
           <button>Close</button>
         </div>
       </form>
     )
   }

   handleInputChange(event){
    if(event.target.name === "recipe"){     
      this.setState({
        [event.target.name]: event.target.value
      });
    }else if(event.target.name === "ingredients"){
      this.setState({
        [event.target.name]: 
      })
    }
    console.log(event.target.value)
  }

    handleSubmit(event){
      event.preventDefault();
      console.log(this.state)
   }
}

export default RecipeForm;
