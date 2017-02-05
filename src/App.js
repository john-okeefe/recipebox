import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/recipe-list';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      recipeName: "",
      ingredients: []
    }
  }

  render() {
    return (
      <div className="App">
        <div className="recipes">
          <RecipeList />
          <button>Add Recipe</button>
        </div>
      </div>
    );
  }
}

export default App;
