package org.wecancodeit.whendoiboilthewater;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.whendoiboilthewater.model.Ingredient;
import org.wecancodeit.whendoiboilthewater.model.Recipe;
import org.wecancodeit.whendoiboilthewater.model.Step;
import org.wecancodeit.whendoiboilthewater.repository.IngredientRepository;
import org.wecancodeit.whendoiboilthewater.repository.MealRepository;
import org.wecancodeit.whendoiboilthewater.repository.RecipeRepository;
import org.wecancodeit.whendoiboilthewater.repository.StepRepository;

@Service
public class Populator implements CommandLineRunner {

	@Resource
	IngredientRepository ingredientRepo;
	
	@Resource
	MealRepository mealRepo;
	
	@Resource
	RecipeRepository recipeRepo;
	
	@Resource
	StepRepository stepRepo;

	@Override
	public void run(String... args) throws Exception {
		
		Ingredient farfalle = new Ingredient("farfalle");
		Ingredient popRocks = new Ingredient("Pop Rocks");
		Ingredient hotDog = new Ingredient("Hot Dogs");
		farfalle = ingredientRepo.save(farfalle);
		popRocks = ingredientRepo.save(popRocks);
		hotDog = ingredientRepo.save(hotDog);
		
		Step step1 = new Step(600L, "boil the pop rocks");
		Step step2 = new Step(300L, "dice the hot dogs");
		Step step3 = new Step(120L, "stir in the hot dogs");
		
		stepRepo.save(step1);
		stepRepo.save(step2);
		stepRepo.save(step3);
		
		Recipe recipe1 = new Recipe("Hot Pop Rock Dog Stew", 12, "A frothy, exciting treat for a cold summer night. 1cup Pop Rocks, 4 Hot Dogs, 2cup Farfalle");
		recipe1.addStep(step1);
		step1.addRecipe(recipe1);
		recipe1.addStep(step2);
		step2.addRecipe(recipe1);
		recipe1.addStep(step3);
		step3.addRecipe(recipe1);
		
		recipe1 = recipeRepo.save(recipe1);
		
		for(Step step : recipe1.getSteps()) {
			System.out.println(step.getDescription());
		}
	}
	
}
