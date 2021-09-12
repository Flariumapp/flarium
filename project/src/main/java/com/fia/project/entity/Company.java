package com.fia.project.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;

@Entity
@Table(name="companies")
public class Company {
	@Id
	@Column(name="company")
	private String company;
	
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

	public Company(String company, String name, String imageUrl) {
		this.company = company;
		this.name = name;
		this.imageUrl = imageUrl;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
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
		return "Company [company=" + company + ", name=" + name + ", imageUrl=" + imageUrl + "]";
	}
	
	public void add(Flight flight) {
		if(flights == null) {
			flights = new ArrayList <>();
		}
		flights.add(flight);
		flight.setCompany(this);
	}
}
