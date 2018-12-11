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
    				<div key={recipe.id}><br /><strong className="leading-capitals">{recipe.name}:</strong> {recipe.description}  
    				{
    					recipe.ingredients.map(ingredient =>{
    						return(
    							<li key={ingredient.id} className="leading-capitals">{ingredient.quantity} {ingredient.name}</li>
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