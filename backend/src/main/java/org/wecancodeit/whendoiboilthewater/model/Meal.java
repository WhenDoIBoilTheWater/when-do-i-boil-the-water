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
	private Long length;

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

	public Long getLength() {
		return length;
	}

	public Long calculateLength() {
		Long totalLength = 0L;
		for (Recipe recipe : recipes) {
			if (recipe.getLength() > totalLength) {
				totalLength = recipe.getLength();
			}
		}
		return totalLength;
	}
	
}