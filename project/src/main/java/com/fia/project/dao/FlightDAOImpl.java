package com.fia.project.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fia.project.entity.Company;
import com.fia.project.entity.Flight;

@Repository
public class FlightDAOImpl implements FlightDAO {

	// Define field for EntityManager
	private EntityManager entityManager;
	
	// Contructor injection
	@Autowired
	public FlightDAOImpl(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}
	
	@Override
	@Transactional
	public List<Flight> getFlights() {
		Session session = entityManager.unwrap(Session.class);
		List <Flight> flights = session.createQuery("from Flight").getResultList();
		return flights;
	}

	@Override
	@Transactional
	public List<Company> getCompanies() {
		Session session = entityManager.unwrap(Session.class);
		return session.createQuery("from Company").getResultList();
	}
	
	@Override
	@Transactional
	public List <Flight> addFlight(Flight f, String companyId) {
		Session session = entityManager.unwrap(Session.class);
		Company company = getCompany(companyId);
		company.add(f);
		return getFlights();
	}
	
	@Override
	@Transactional
	public Company getCompany(String companyId) {
		Session session = entityManager.unwrap(Session.class);
		Company theCompany = session.get(Company.class, companyId);
		return theCompany;
	}
	
	@Override
	@Transactional
	public List <Company> addCompany(Company c) {
		Session session = entityManager.unwrap(Session.class);
		session.save(c);
		return getCompanies();
	}
}
