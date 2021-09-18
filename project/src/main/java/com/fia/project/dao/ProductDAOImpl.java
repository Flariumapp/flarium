package com.fia.project.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fia.project.entity.Product;

@Repository
public class ProductDAOImpl implements ProductDAO {
	// Define field for EntityManager
	private EntityManager entityManager;

	// Contructor injection
	@Autowired
	public ProductDAOImpl(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}
	
	@Override
	public List <Product> findAll() {
		Session session = entityManager.unwrap(Session.class);
		return session.createQuery("from Product").getResultList();
	}
	
	@Override
	public List <Product> saveProducts(List <Product> products) {
		Session session = entityManager.unwrap(Session.class);
		for(Product product: products) {
			session.save(product);
		}
		return findAll();
	}

	@Override
	public List<Product> findByCategory(String category) {
		Session session = entityManager.unwrap(Session.class);
		Query query = session.createQuery("from Product where category = :category");
		query.setParameter("category", category);
		return query.getResultList();
	}

}
