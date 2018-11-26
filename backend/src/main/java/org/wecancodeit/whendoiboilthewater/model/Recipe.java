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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Recipe {
	@GeneratedValue @Id private Long id;
	@OneToMany
	private List<Step> steps = new ArrayList<Step>();
	@ManyToMany
	private Collection<Ingredient> ingredients = new HashSet<Ingredient>();
	@JsonIgnore @ManyToMany
	private Collection<Meal> meals = new HashSet<Meal>();
	private String description;
	private int length;
	private String name;	
	private int servingSize;
	
	public Recipe() {}
	

	
	public Recipe( String name, int servingSize, String description, List<Step> steps, Collection<Ingredient> ingredients) {
		this.steps = steps;
		this.ingredients = ingredients;
		this.length = calculateLength();
		this.name = name;
		this.servingSize = servingSize;
		this.description = description;
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
		return length;
	}



	public String getName() {
		return name;
	}



	public int getServingSize() {
		return servingSize;
	}



	public Collection<Meal> getMeals() {
		return meals;
	}



	public String getDescription() {
		return description;
	}



	public int calculateLength() {
		int totalLength = 0;
		for (Step step : steps) {
			totalLength += step.getLength();
		}
		return totalLength;
	}
}
