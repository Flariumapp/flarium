package com.fia.project.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;

@Entity
@Table(name="companies")
public class Company {
	@Id
	@Column(name="company")
	private String id;
	
	@Column(name="name")
	@NotNull
	private String name;
	
	@Column(name="image_url")
	@NotNull
	private String imageUrl;
	
	@JsonManagedReference
	@OneToMany(mappedBy="company", cascade = {CascadeType.ALL})
	private List <Flight> flights;
	
	public Company() {}

	public Company(String id, String name, String imageUrl) {
		this.id = id;
		this.name = name;
		this.imageUrl = imageUrl;
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
	
	public List<Flight> getFlights() {
		return flights;
	}

	public void setFlights(List<Flight> flights) {
		this.flights = flights;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", name=" + name + ", imageUrl=" + imageUrl + ", flights=" + flights + "]";
	}

	public void add(Flight flight) {
		if(flights == null) {
			flights = new ArrayList <>();
		}
		flights.add(flight);
		flight.setCompany(this);
	}
}
