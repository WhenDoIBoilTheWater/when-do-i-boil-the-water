package org.wecancodeit.whendoiboilthewater.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Recipe {
	@GeneratedValue @Id private Long id;
	@OneToMany(mappedBy = "recipe")
	private List<Step> steps = new ArrayList<Step>();
	
	public Recipe() {}
}
