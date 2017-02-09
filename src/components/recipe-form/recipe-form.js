import React, { Component } from 'react';
// import RecipeName from './recipe-name'
// import IngredientsInput from './ingredients-input'
let text = "";
let stateArr = [];
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
         <h2 className="add-recipe-title">Add a Recipe</h2>
         {/* draw a line here in future */}
         <div>
          <strong>Recipe</strong>
          <input name="recipe" onChange={this.handleInputChange} value={this.state.recipe} />
        </div>
         <div>
          <strong>Ingredients</strong>
          <input name="ingredients" onChange={this.handleInputChange} value={text} />
        </div>
         {/* draw a line here in future */}
         <div>
           <button type="submit" onClick={this.handleSubmit}>Add Recipe</button>
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
        text += event.target.value;
        console.log(text)
      }
      // let newArray = this.state.ingredients.slice(',');
      // newArray.push(event.target.value)
      // this.setState({
      //   [event.target.name]: newArray
      // })
    }
  


    handleSubmit(event){
      let ingredientsArr = text.split(',');
      this.setState({
        ingredients: ingredientsArr
      })
      text = '',
      console.log(this.state)
      // console.log(event)
      event.preventDefault();
   }
}

export default RecipeForm;
