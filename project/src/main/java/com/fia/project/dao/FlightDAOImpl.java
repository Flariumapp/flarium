package com.fia.project.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
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
		List <Flight> flights = session.createQuery("from Flight order by time").getResultList();
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
		if(company == null) {
			throw new RuntimeException("Company not found");
		}
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
	public Company addCompany(Company c) {
		Session session = entityManager.unwrap(Session.class);
		session.save(c);
		return c;
	}

	@Override
	@Transactional
	public List<Company> addCompanies(List<Company> companies) {
		Session session = entityManager.unwrap(Session.class);
		for(Company company: companies) {
			System.out.println(company);
			session.save(company);
		}
		return getCompanies();
	}

	@Override
	@Transactional
	public List<Flight> getFlightsFliter(int international, int arrival) {
		Session session = entityManager.unwrap(Session.class);
		System.out.println(international + " " + arrival);
		Query query = session.createQuery("from Flight where isInternational=:international AND isArriving=:arrival order by time");
		query.setParameter("international", international);
		query.setParameter("arrival", arrival);
		List <Flight> flights = query.getResultList();
		return flights;
	}
}
