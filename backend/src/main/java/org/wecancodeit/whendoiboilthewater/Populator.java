package org.wecancodeit.whendoiboilthewater;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.whendoiboilthewater.model.Ingredient;
import org.wecancodeit.whendoiboilthewater.model.Meal;
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
		Ingredient cheeto = new Ingredient("cheeto");
		Ingredient navyBean = new Ingredient("Navy Bean");
		Ingredient pintoBean = new Ingredient("Pinto Bean");
		Ingredient lightKidneyBean = new Ingredient("Light Kidney Bean");
		Ingredient darkKidneyBean = new Ingredient("Dark Kidney Bean");
		Ingredient garbanzoBean = new Ingredient("Garbanzo Bean");
		Ingredient butterBean = new Ingredient("Butter Bean");
		Ingredient bakedBean = new Ingredient("Baked Bean");
		Ingredient favaBean = new Ingredient("Fava Bean");
		Ingredient cannelliniBean = new Ingredient("Cannellini Bean");
		Ingredient flageoletBean = new Ingredient("Flageolet Bean");
		Ingredient milk = new Ingredient("Milk");
		Ingredient tapiocaBall = new Ingredient("Tapioca Balls");

		farfalle = ingredientRepo.save(farfalle);
		popRocks = ingredientRepo.save(popRocks);
		hotDog = ingredientRepo.save(hotDog);
		cheeto = ingredientRepo.save(cheeto);
		navyBean = ingredientRepo.save(navyBean);
		pintoBean = ingredientRepo.save(pintoBean);
		lightKidneyBean = ingredientRepo.save(lightKidneyBean);
		darkKidneyBean = ingredientRepo.save(darkKidneyBean);
		garbanzoBean = ingredientRepo.save(garbanzoBean);
		butterBean = ingredientRepo.save(butterBean);
		bakedBean = ingredientRepo.save(bakedBean);
		favaBean = ingredientRepo.save(favaBean);
		cannelliniBean = ingredientRepo.save(cannelliniBean);
		flageoletBean = ingredientRepo.save(flageoletBean);
		milk = ingredientRepo.save(milk);
		tapiocaBall = ingredientRepo.save(tapiocaBall);

		Step step1 = new Step(600L, "boil the pop rocks");
		Step step2 = new Step(300L, "dice the hot dogs");
		Step step3 = new Step(120L, "stir in the hot dogs");
		Step cheetoStep1 = new Step(66L, "Fry Cheeto");
		Step step4 = new Step(65L, "boil all them beans hard AF");
		Step step5 = new Step(60L, "drain all them beans");
		Step step6 = new Step(55L, "add the Navy Bean to the bowl");
		Step step7 = new Step(50L, "add the Pinto Bean to the bowl");
		Step step8 = new Step(45L, "add the Light Kidney Bean to the bowl");
		Step step9 = new Step(40L, "add the Dark Kidney Bean to the bowl");
		Step step10 = new Step(35L, "add the Garbanzo Bean to the bowl");
		Step step11 = new Step(30L, "add the Butter Bean to the bowl");
		Step step12 = new Step(25L, "add the Baked Bean to the bowl");
		Step step13 = new Step(20L, "add the Fava Bean to the bowl");
		Step step14 = new Step(15L, "add the Cannellini Bean to the bowl");
		Step step15 = new Step(10L, "add the FlageoletBean to the bowl");
		Step step16 = new Step(67L, "steep the hotdogs in nearly boiling water");
		Step step17 = new Step(42L, "remove hot dogs from water");
		Step step18 = new Step(37L, "add milk to hot dog tea");
		Step step19 = new Step(32L, "whisk together hot dog tea and milk");
		Step step20 = new Step(27L, "set aside hot dog milk tea");
		Step step21 = new Step(7L, "add tapioca balls to hot dog milk tea");

		stepRepo.save(step1);
		stepRepo.save(step2);
		stepRepo.save(step3);
		stepRepo.save(cheetoStep1);
		stepRepo.save(step4);
		stepRepo.save(step5);
		stepRepo.save(step6);
		stepRepo.save(step7);
		stepRepo.save(step8);
		stepRepo.save(step9);
		stepRepo.save(step10);
		stepRepo.save(step11);
		stepRepo.save(step12);
		stepRepo.save(step13);
		stepRepo.save(step14);
		stepRepo.save(step15);
		stepRepo.save(step16);
		stepRepo.save(step17);
		stepRepo.save(step18);
		stepRepo.save(step19);
		stepRepo.save(step20);
		stepRepo.save(step21);

		Recipe recipe1 = new Recipe("Hot Pop Rock Dog Stew", 12,
				"A frothy, exciting treat for a cold summer night. 1cup Pop Rocks, 4 Hot Dogs, 2cup Farfalle");
		recipe1.addStep(step1);
		step1.addRecipe(recipe1);
		recipe1.addStep(step2);
		step2.addRecipe(recipe1);
		recipe1.addStep(step3);
		step3.addRecipe(recipe1);

		recipe1.addIngredient(farfalle);
		farfalle.addRecipe(recipe1);
		recipe1.addIngredient(popRocks);
		popRocks.addRecipe(recipe1);
		recipe1.addIngredient(hotDog);
		hotDog.addRecipe(recipe1);

		recipe1 = recipeRepo.save(recipe1);

		farfalle = ingredientRepo.save(farfalle);
		popRocks = ingredientRepo.save(popRocks);
		hotDog = ingredientRepo.save(hotDog);

		stepRepo.save(step1);
		stepRepo.save(step2);
		stepRepo.save(step3);

		Recipe recipe2 = new Recipe("Single Fried Cheeto", 4, "A delicacy.");

		recipe2.addStep(cheetoStep1);
		cheetoStep1.addRecipe(recipe2);

		recipe2.addIngredient(cheeto);
		cheeto.addRecipe(recipe2);

		recipeRepo.save(recipe2);

		ingredientRepo.save(cheeto);

		stepRepo.save(cheetoStep1);

		Recipe recipe3 = new Recipe("Quick 10-Bean Salad", 10, "Ten High Quality Beans for Ten High Quality Folks");

		recipe3.addStep(step4);
		step4.addRecipe(recipe3);
		recipe3.addStep(step5);
		step5.addRecipe(recipe3);
		recipe3.addStep(step6);
		step6.addRecipe(recipe3);
		recipe3.addStep(step7);
		step7.addRecipe(recipe3);
		recipe3.addStep(step8);
		step8.addRecipe(recipe3);
		recipe3.addStep(step9);
		step9.addRecipe(recipe3);
		recipe3.addStep(step10);
		step10.addRecipe(recipe3);
		recipe3.addStep(step11);
		step11.addRecipe(recipe3);
		recipe3.addStep(step12);
		step12.addRecipe(recipe3);
		recipe3.addStep(step13);
		step13.addRecipe(recipe3);
		recipe3.addStep(step14);
		step14.addRecipe(recipe3);
		recipe3.addStep(step15);
		step15.addRecipe(recipe3);

		recipe3.addIngredient(navyBean);
		navyBean.addRecipe(recipe3);
		recipe3.addIngredient(pintoBean);
		pintoBean.addRecipe(recipe3);
		recipe3.addIngredient(lightKidneyBean);
		lightKidneyBean.addRecipe(recipe3);
		recipe3.addIngredient(darkKidneyBean);
		darkKidneyBean.addRecipe(recipe3);
		recipe3.addIngredient(garbanzoBean);
		garbanzoBean.addRecipe(recipe3);
		recipe3.addIngredient(butterBean);
		butterBean.addRecipe(recipe3);
		recipe3.addIngredient(bakedBean);
		bakedBean.addRecipe(recipe3);
		recipe3.addIngredient(favaBean);
		favaBean.addRecipe(recipe3);
		recipe3.addIngredient(cannelliniBean);
		cannelliniBean.addRecipe(recipe3);
		recipe3.addIngredient(flageoletBean);
		flageoletBean.addRecipe(recipe3);

		recipeRepo.save(recipe3);

		ingredientRepo.save(navyBean);
		ingredientRepo.save(pintoBean);
		ingredientRepo.save(lightKidneyBean);
		ingredientRepo.save(darkKidneyBean);
		ingredientRepo.save(garbanzoBean);
		ingredientRepo.save(butterBean);
		ingredientRepo.save(bakedBean);
		ingredientRepo.save(favaBean);
		ingredientRepo.save(cannelliniBean);
		ingredientRepo.save(flageoletBean);

		stepRepo.save(step4);
		stepRepo.save(step5);
		stepRepo.save(step6);
		stepRepo.save(step7);
		stepRepo.save(step8);
		stepRepo.save(step9);
		stepRepo.save(step10);
		stepRepo.save(step11);
		stepRepo.save(step12);
		stepRepo.save(step13);
		stepRepo.save(step14);
		stepRepo.save(step15);

		Recipe recipe4 = new Recipe("Hot Dog Milk Tea Boba", 10,
				"Fancy bubble tea featuring your favorite of conglomerated meat products, the Hot Dog!");

		recipe4.addStep(step16);
		step16.addRecipe(recipe4);
		recipe4.addStep(step17);
		step17.addRecipe(recipe4);
		recipe4.addStep(step18);
		step18.addRecipe(recipe4);
		recipe4.addStep(step19);
		step19.addRecipe(recipe4);
		recipe4.addStep(step20);
		step20.addRecipe(recipe4);
		recipe4.addStep(step21);
		step21.addRecipe(recipe4);

		recipe4.addIngredient(hotDog);
		hotDog.addRecipe(recipe4);
		recipe4.addIngredient(milk);
		milk.addRecipe(recipe4);
		recipe4.addIngredient(tapiocaBall);
		tapiocaBall.addRecipe(recipe4);

		recipeRepo.save(recipe4);

		ingredientRepo.save(hotDog);
		ingredientRepo.save(milk);
		ingredientRepo.save(tapiocaBall);

		stepRepo.save(step16);
		stepRepo.save(step17);
		stepRepo.save(step18);
		stepRepo.save(step19);
		stepRepo.save(step20);
		stepRepo.save(step21);

		Meal meal1 = new Meal("Hot Poppin Cheeto Rockin");
		meal1.addRecipe(recipe1);
		meal1.addRecipe(recipe2);

		mealRepo.save(meal1);
		
		Meal meal2 = new Meal("Quick Beans n Tea");
		meal2.addRecipe(recipe3);
		meal2.addRecipe(recipe4);
		
		mealRepo.save(meal2);

	}

}
