import React from 'react';

const Recipe = (props) => {
  return (
    <div>
      <div className="ingredients">
        {props.ingredients.map((x, index) => <li key={index}>{x}</li>)}
      </div>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  )
}

export default Recipe;
