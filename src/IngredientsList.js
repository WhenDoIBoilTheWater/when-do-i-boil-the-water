import React from 'react'


class IngredientsList extends React.Component {
    // constructor(props){
    //     super(props)

    // }

    render(){

    	return(
    		<ul>
    		{this.props.recipeArray.map(recipe =>{
    			return (
    				<div><br /><strong>{recipe.name}:</strong> {recipe.description}  
    				{
    					recipe.ingredients.map(ingredient =>{
    						return(
    							<li>{ingredient.quantity} {ingredient.name}</li>
    							)
    					})
    				}
    				</div>
    				)
    		})}
    		</ul>
    		)
    }
}

export default IngredientsList