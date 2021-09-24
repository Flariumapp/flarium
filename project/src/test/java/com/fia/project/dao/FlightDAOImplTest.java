package com.fia.project.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import com.fia.project.entity.Company;
import com.fia.project.entity.Flight;

@SpringBootTest
class FlightDAOImplTest {
	
	@Autowired
	private FlightDAOImpl flightDAO;
	
	@Test
	@Transactional
	@Rollback(true)
	public void addCompanyTest() {
		Company c = new Company("SG", "Spice Jet", "url");
		flightDAO.addCompany(c);
		List <Company> list = flightDAO.getCompanies();
		assertEquals(list.get(0).getId(), c.getId());
	}
	
	@Test
	@Transactional
	@Rollback(true)
	public void addCompaniesTest() {
		Company c = new Company("SG", "Spice Jet", "url");
		List <Company> companies = new ArrayList <>();
		companies.add(c);
		flightDAO.addCompanies(companies);
		List <Company> list = flightDAO.getCompanies();
		assertEquals(list.get(0).getId(), companies.get(0).getId());
	}
	
	@Test
	@Transactional
	@Rollback(true)
	public void addGetFlightTest() {
		Company c = new Company("SG", "Spice Jet", "url");
		List <Company> companies = new ArrayList <>();
		companies.add(c);
		Flight f = new Flight("SG421", "dubai", 1500, "T3", "G4", 1, 0);
		flightDAO.addCompanies(companies);
		String companyId = "SG";
		flightDAO.addFlight(f, companyId);
		List <Flight> list = flightDAO.getFlights();
		assertEquals(1, list.size());
	}
	
	@Test
	@Transactional
	@Rollback(true)
	public void getCompanyByIdTest() {
		Company c = new Company("SG", "Spice Jet", "url");
		List <Company> companies = new ArrayList <>();
		companies.add(c);
		flightDAO.addCompanies(companies);
		String companyId = "SG";
		Company comp = flightDAO.getCompany(companyId);
		assertEquals(c.getId(), comp.getId());
	}
	
	@Test
	@Transactional
	@Rollback(true)
	public void getFlightsFilter() {
		Company c = new Company("SG", "Spice Jet", "url");
		List <Company> companies = new ArrayList <>();
		companies.add(c);
		Flight f = new Flight("SG421", "dubai", 1500, "T3", "G4", 1, 0);
		flightDAO.addCompanies(companies);
		String companyId = "SG";
		flightDAO.addFlight(f, companyId);
		int isArriving = 1;
		int isInternational = 0;
		List <Flight> flights = flightDAO.getFlightsFliter(isInternational, isArriving);
		assertEquals(1, flights.size());
		assertEquals("SG421", flights.get(0).getId());
	}
	
	@Test
	@Transactional
	@Rollback(true)
	public void savingFlightWhenCompanyNotSaved() {
		Flight f = new Flight("SG421", "dubai", 1500, "T3", "G4", 1, 0);
		String companyId = "SG";
		assertThrows(Exception.class, () -> flightDAO.addFlight(f, companyId)); 
	}

}
