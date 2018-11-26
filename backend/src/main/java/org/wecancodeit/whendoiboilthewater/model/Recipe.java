package org.wecancodeit.whendoiboilthewater.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Recipe {
	@GeneratedValue @Id private Long id;
	@OneToMany(mappedBy = "recipe")
	private List<Step> steps = new ArrayList<Step>();
	@ManyToMany
	private Collection<Ingredient> ingredients = new HashSet<Ingredient>();
	private int Length;
	private String name;	
	private int servingSize;
	
	public Recipe() {}
	

	
	public Recipe(List<Step> steps, Collection<Ingredient> ingredients, int length, String name, int servingSize) {
		this.steps = steps;
		this.ingredients = ingredients;
		Length = length;
		this.name = name;
		this.servingSize = servingSize;
	}



	public Long getId() {
		return id;
	}



	public List<Step> getSteps() {
		return steps;
	}



	public Collection<Ingredient> getIngredients() {
		return ingredients;
	}



	public int getLength() {
		return Length;
	}



	public String getName() {
		return name;
	}



	public int getServingSize() {
		return servingSize;
	}



	public int calculateLength() {
		int totalLength = 0;
		for (Step step : steps) {
			totalLength += step.getLength();
		}
		return totalLength;
	}
}
