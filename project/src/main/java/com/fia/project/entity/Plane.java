package com.fia.project.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="plane")
public class Plane {
	 
	// define fields
	
	@Column(name="flight_no")
	private String flightNo;
	
	@Column(name="image_url")
	private String imageUrl;
	
	@OneToMany(mappedBy="plane", cascade={CascadeType.ALL})
	private List <Flight> flights;
	
	@ManyToOne(cascade= {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
	@JoinColumn(name="company")
	private Company company;
	
	// define constructors
	
	public Plane() {}

	public Plane(String flightNo, String imageUrl) {
		this.flightNo = flightNo;
		this.imageUrl = imageUrl;
	}

	// generate getters/setters
	
	public List<Flight> getFlights() {
		return flights;
	}

	public void setFlights(List<Flight> flights) {
		this.flights = flights;
	}

	public String getFlightNo() {
		return flightNo;
	}
	
	public void setFlightNo(String flightNo) {
		this.flightNo = flightNo;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	// define toString()
	
	@Override
	public String toString() {
		return "Plane [flightNo=" + flightNo + ", imageUrl=" + imageUrl + "]";
	}
	
	// convenience method
	public void add(Flight tempFlight) {
		if(flights == null) {
			flights = new ArrayList<>();
		}
		flights.add(tempFlight);
		tempFlight.setPlane(this);
	}
	
}
