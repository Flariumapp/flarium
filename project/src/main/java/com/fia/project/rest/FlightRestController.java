package com.fia.project.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fia.project.dao.FlightDAO;
import com.fia.project.entity.Company;
import com.fia.project.entity.Flight;

@RestController
@RequestMapping("/api")
public class FlightRestController {
	private FlightDAO flightDAO;
	
	// constructor injection
	@Autowired
	public FlightRestController(FlightDAO tfd) {
		flightDAO = tfd;
	}
	
	@CrossOrigin
	@GetMapping("/flights") 
	public List <Flight> getFlights() {
		return flightDAO.getFlights();
	}
	
	@CrossOrigin
	@GetMapping("/companies")
	public List <Company> getCompanies() {
		return flightDAO.getCompanies();
	}
	
	@CrossOrigin
	@GetMapping("/companies/{companyId}")
	public Company getCompany(@PathVariable String companyId) {
		Company company = flightDAO.getCompany(companyId);
		if(company == null) {
			throw new RuntimeException("Company not found");
		}
		return company;
	}
	
	@CrossOrigin
	@PostMapping("/flights/{companyId}")
	public List <Flight> addFlight(@RequestBody Flight theFlight, @PathVariable String companyId) {
		return flightDAO.addFlight(theFlight, companyId);
	}
	
	@CrossOrigin
	@PostMapping("/companies") 
	public List <Company> addCompanies(@RequestBody List <Company> companies) {
		return flightDAO.addCompanies(companies);
	}
	
	@CrossOrigin
	@GetMapping("/flights/{international}/{arrival}")
	public List <Flight> getFlightsFilter(@PathVariable("international") int international, @PathVariable("arrival") int arrival) {
		return flightDAO.getFlightsFliter(international, arrival);
	}
}
