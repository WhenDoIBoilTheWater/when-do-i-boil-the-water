package org.wecancodeit.whendoiboilthewater.model;

import java.util.Collection;
import java.util.HashSet;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Meal {

	@GeneratedValue @Id private Long id;
	@ManyToMany private Collection<Recipe> recipes = new HashSet<Recipe>();
	private int length;

	public Meal() {}

	public Meal(Collection<Recipe> recipes) {
		this.recipes = recipes;
		this.length = calculateLength();
	}



	public Long getId() {
		return id;
	}

	public Collection<Recipe> getRecipes() {
		return recipes;
	}

	public int getLength() {
		return length;
	}

	public int calculateLength() {
		int totalLength = 0;
		for (Recipe recipe : recipes) {
			if (recipe.getLength() > totalLength) {
				totalLength = recipe.getLength();
			}
		}
		return totalLength;
	}
	
}
