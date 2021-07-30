import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isAddRecipeFormDisplayed: false,
      recipes: [],
      newRecipeName: "",
      newRecipeInstructions: ''
    }
  }
  // wirte json data to recipe array 
  componentDidMount = () => {
    const state = JSON.parse(window.localStorage.getItem('recipes'));

    if (state) {
      console.log('recipes', state[0])
      this.setState({ recipes: state.recipes })
    } else { this.setState(prevState => prevState) }
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    this.setState({ [name]: target.value });
  }


  toggleAddRecipeForm = () => {
    this.setState({ isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed })
  }

  submitRecipe = (event) => {
    event.preventDefault()
    //.Then(local storage)
    this.setState((prevState) => {
      console.log('prevStat', prevState.recipes)
      window.localStorage.setItem('recipes', JSON.stringify({
        recipes: [
          ...prevState.recipes,
          {
            name: this.state.newRecipeName,
            instructions: this.state.newRecipeInstructions,
          }
        ]
      }))

      return {
        recipes: [
          ...prevState.recipes,
          {
            name: this.state.newRecipeName,
            instructions: this.state.newRecipeInstructions,
          }
        ],
        newRecipeName: "", newRecipeInstructions: ''
      }
    })
  }


  render() {
    const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe} >
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text"
          id="newRecipeName"
          name="newRecipeName"
          onChange={this.handleChange}
          value={this.state.newRecipeName} />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea id="newRecipeInstructions"
          name="newRecipeInstructions"
          placeholder="write recipe instructions here..."
          onChange={this.handleChange}
          value={this.state.newRecipeInstructions} />
        <input type="submit" />
      </form>
    )



    if (this.state.recipes) {
      return (
        <div className="App">
          <h1 className="App-header">My Recipes</h1>
          {
            this.state.isAddRecipeFormDisplayed
              ? addNewRecipeForm
              : <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>
          }
          {
            this.state.recipes.length > 0 ?
              <ul>
                {this.state.recipes.map((recipe, index) => <li id={recipe.name} name={recipe.name} key={index + recipe.name}>{recipe.name}</li>)}
              </ul> :
              <p>There are no recipes to list.</p>
          }
        </div>
      )
    } else {
      return (<div>Nothing to load</div>)
    }
  }
}

export default App;