package com.fia.project.dao;

import java.util.List;

import com.fia.project.entity.Company;
import com.fia.project.entity.Flight;

public interface FlightDAO {
	public List <Flight> getFlights();
	
	public List <Company> getCompanies();
	
	public List <Flight> addFlight(Flight f, String companyId);
	
	public Company addCompany(Company c);
	
	public Company getCompany(String companyId);
	
	public List <Company> addCompanies(List <Company> companies);
	
	public List <Flight> getFlightsFliter(int international, int arrival);
}
