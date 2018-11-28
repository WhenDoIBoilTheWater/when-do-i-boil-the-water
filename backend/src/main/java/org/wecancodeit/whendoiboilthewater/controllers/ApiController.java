package org.wecancodeit.whendoiboilthewater.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.whendoiboilthewater.model.Ingredient;
import org.wecancodeit.whendoiboilthewater.model.Meal;
import org.wecancodeit.whendoiboilthewater.model.Recipe;
import org.wecancodeit.whendoiboilthewater.model.Step;
import org.wecancodeit.whendoiboilthewater.repository.IngredientRepository;
import org.wecancodeit.whendoiboilthewater.repository.MealRepository;
import org.wecancodeit.whendoiboilthewater.repository.RecipeRepository;
import org.wecancodeit.whendoiboilthewater.repository.StepRepository;


@CrossOrigin
@RestController
public class ApiController {
	
	@Autowired
	RecipeRepository recipeRepo;
	@Autowired
	IngredientRepository ingredientRepo;
	@Autowired
	StepRepository stepRepo;
	@Autowired
	MealRepository mealRepo;
	
	@GetMapping("/api/meals")
	public Collection<Meal> showMeals() {
		return (Collection<Meal>) mealRepo.findAll();
	}
	
	@GetMapping("/api/meals/{mealId}")
	public Meal showMeal(@PathVariable(value = "mealId") Long mealId) {
		return mealRepo.findById(mealId).get();
		}
	
	@GetMapping("/api/meals/{mealId}/recipes")
	public Collection<Recipe> showMealRecipes(@PathVariable(value = "mealId")Long mealId){
		return mealRepo.findById(mealId).get().getRecipes();
	}
	
	@GetMapping("/api/meals/{mealId}/recipes/{recipeId}")
	public Recipe showMealRecipe(@PathVariable(value = "mealId")Long mealId, @PathVariable(value = "recipeId") Long recipeId){
		return recipeRepo.findById(recipeId).get();
	}
	
	@GetMapping("/api/recipes")
	public Collection<Recipe> showRecipes() {
		return (Collection<Recipe>) recipeRepo.findAll();
	}
	
	@GetMapping("/api/recipes/{recipeId}")
	public Recipe showRecipe(@PathVariable(value = "recipeId") Long recipeId) {
		return recipeRepo.findById(recipeId).get();
	}
	
	@GetMapping("/api/recipes/{recipeId}/steps")
	public Collection<Step> showRecipeSteps(@PathVariable(value = "recipeId")Long recipeId) {
		return (Collection<Step>) recipeRepo.findById(recipeId).get().getSteps();
	}
	
	@GetMapping("/api/recipes/{recipeId}/ingredients")
	public Collection<Ingredient> showRecipeIngredient(@PathVariable(value = "recipeId") Long recipeId) {
		return (Collection<Ingredient>) recipeRepo.findById(recipeId).get().getIngredients();
	}
	
	@GetMapping("/api/ingredients")
	public Collection<Ingredient> showIngredients(){
		return (Collection<Ingredient>) ingredientRepo.findAll();
	}
	
	@GetMapping("/api/ingredients/{ingredientId}")
	public Ingredient showIngredient(@PathVariable(value = "ingredientId")Long ingredientId){
		return ingredientRepo.findById(ingredientId).get();
	}
}

