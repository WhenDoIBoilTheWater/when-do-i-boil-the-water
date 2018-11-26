package org.wecancodeit.whendoiboilthewater.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Step {
	@Id @GeneratedValue private Long id;
	private int length;
	private String description;
	private boolean bypassNotification;
	@JsonIgnore @ManyToOne private Recipe recipe;


	public Step() {}

	public Step(int length, String description) {
		this.length = length;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public int getLength() {
		return length;
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