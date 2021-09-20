package com.fia.project.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.service.spi.InjectService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import com.fia.project.entity.Product;

@SpringBootTest
class ProductDAOImplTest {

	@Autowired
	private ProductDAOImpl productDAO;

	@Test
	@Transactional
	@Rollback(true)
	public void testFindAllProduct() {
		List <Product> products = new ArrayList <>();
		products.add(new Product(1, "mug", 10, "utensil", "image"));
		productDAO.saveProducts(products);
		List <Product> list = productDAO.findAll();
		assertEquals(products.get(0).getName(), list.get(0).getName());
	}
	
	@Test
	@Transactional
	@Rollback(true)
	public void addProductsTest() {
		List <Product> products = new ArrayList <>();
		products.add(new Product(1, "mug", 10, "utensil", "image"));
		productDAO.saveProducts(products);
		List <Product> list = productDAO.findAll();
		assertEquals(products.get(0).getName(), list.get(0).getName());
	}
	
	@Test
	@Transactional
	@Rollback(true)
	public void findByCategoryTest() {
		List <Product> products = new ArrayList <>();
		products.add(new Product(1, "mug", 10, "utensil", "image"));
		productDAO.saveProducts(products);
		String category = "utensil";
		List <Product> list = productDAO.findByCategory(category);
		assertEquals(1, list.size());
	}
}
