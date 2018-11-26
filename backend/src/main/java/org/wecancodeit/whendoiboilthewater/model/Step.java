package org.wecancodeit.whendoiboilthewater.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Step {
	@Id @GeneratedValue private Long id;
	private int time;
	private String description;
	private boolean bypassNotification;
	@ManyToOne private Recipe recipe;


	public Step() {}

	public Step(int time, String description) {
		this.time = time;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public int getTime() {
		return time;
	}

	public String getDescription() {
		return description;
	}

	public boolean isBypassNotification() {
		return bypassNotification;
	}

	public Recipe getRecipe() {
		return recipe;
	}

}