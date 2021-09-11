package com.fia.project.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="company")
public class Company {
	
	// define fields
	
	@Id
	@Column(name="id")
	private String id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="image_url")
	private String imageUrl;
	
	@OneToMany(mappedBy="company", cascade={CascadeType.ALL})
	private List <Plane> planes;
	
	// define constructors
	
	public Company() {}

	public Company(String id, String name, String imageUrl) {
		this.id = id;
		this.name = name;
		this.imageUrl = imageUrl;
	}

	// generate getters/setters

	public List<Plane> getPlanes() {
		return planes;
	}

	public void setPlanes(List<Plane> planes) {
		this.planes = planes;
	}

	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	// generate toString()

	@Override
	public String toString() {
		return "Company [id=" + id + ", name=" + name + ", imageUrl=" + imageUrl + "]";
	}
	
	public void add(Plane tempPlane) {
		if(planes == null) {
			planes = new ArrayList <>();
		}
		planes.add(tempPlane);
		tempPlane.setCompany(this);
	}
		
}
