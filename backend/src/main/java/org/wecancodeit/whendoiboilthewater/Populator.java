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
		
		Step step1 = new Step(2000, "Boil the Pop Rocks");
		Step step2 = new Step(100, "Dice Hot Dogs");
		Step step3 = new Step(300, "Sear hot dogs in pan");
		Step step4 = new Step(900, "Bake Hot Dogs in toaster Oven");
		Step step5 = new Step(200, "Stir in hot dogs");
		Step step6 = new Step(100, "ganish with dry pasta");
		stepRepo.save(step1);
		stepRepo.save(step2);
		stepRepo.save(step3);
		stepRepo.save(step4);
		stepRepo.save(step5);
		stepRepo.save(step6);

		ArrayList<Step> steps = new ArrayList<>();
		steps.add(step1);
		steps.add(step2);
		steps.add(step3);
		steps.add(step4);
		steps.add(step5);
		steps.add(step6);
		
		Collection<Ingredient> ingredients = new HashSet<>();
		ingredients.add(farfalle);
		ingredients.add(popRocks);
		ingredients.add(hotDog);
		
		Recipe recipe1 = new Recipe("Farfalle Poprock Stew", 12, "1cup Pop Rocks, 2 Hot Dogs, 1cup Farfalle", steps, ingredients);
		recipe1 = recipeRepo.save(recipe1);
	}
	
}
