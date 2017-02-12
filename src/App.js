import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/recipe-list';
import RecipeForm from './components/recipe-form/recipe-form';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      recipes: [
        {
          "id": "01",
          "recipeName": "Banana Pudding",
          "ingredients": ["cream cheese", "condensed milk", "pudding mix", "milk", "vanilla extract", "whipped topping", "bananas", "vanilla wafers"]
        },
        {
          "id": "02",
          "recipeName": "Baked Buffalo Chicken Dip",
          "ingredients": ["rotisserie chicken", "cream cheese", "Frank's RedHot", "Pepper Jack cheese", "blue cheese dressing", "crumbled blue cheese", "seafood seasoning", "cayenne pepper", "shredded pepper Jack cheese", "cayenne pepper garnish"]
        },
        {
          "id": "03",
          "recipeName": "Too Much Chocolate Cake",
          "ingredients": ["devil's food cake mix", "chocolate pudding mix", "sour cream", "vegetable oil", "eggs", "warm water", "semisweet chocolate chips"]
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        // {console.log(this.state)}
        <div className="recipes">
          <RecipeList recipes={this.state.recipes} />
          <button>Add Recipe</button>
        </div>
        <RecipeForm addRecipeToState={(id, recipeName, ingredients) => {
           return this.setState({
              recipes: this.state.recipes.concat(id)
            })} } />
      </div>
    );
  }
}

export default App;
