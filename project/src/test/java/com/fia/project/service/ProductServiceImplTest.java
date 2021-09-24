package com.fia.project.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.fia.project.dao.ProductDAO;
import com.fia.project.entity.Product;

class ProductServiceImplTest {
	@InjectMocks
	ProductServiceImpl productService;

	@Mock
	ProductDAO productDAO;
	
	@BeforeEach 
	public void init() {
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void getAllProductsTest() {
		List <Product> products = new ArrayList<Product>();
		products.add(new Product(1, "cup", 10, "utensil", "imageUrl"));
		products.add(new Product(2, "mug", 10, "utensil", "imageUrl"));
		products.add(new Product(3, "can", 10, "utensil", "imageUrl"));
		when(productDAO.findAll()).thenReturn(products);
		List <Product> list = productService.findAll();
		assertEquals(3, list.size());
		verify(productDAO, times(1)).findAll();
	}
	
	@Test
	public void saveProductsTest() {
		Product p = new Product(1, "cup", 10, "utensil", "imageUrl");
		when(productDAO.saveProduct(p)).thenReturn(p);
		Product result = productService.saveProduct(p);
		assertEquals(p.getName(), result.getName());
		verify(productDAO, times(1)).saveProduct(p);
	}
	
	@Test
	public void findProductsByCategoryTest() {
		String category = "utensil";
		List <Product> products = new ArrayList<Product>();
		products.add(new Product(1, "cup", 10, "utensil", "imageUrl"));
		products.add(new Product(2, "mug", 10, "utensil", "imageUrl"));
		products.add(new Product(3, "can", 10, "utensil", "imageUrl"));
		when(productDAO.findByCategory(category)).thenReturn(products);
		List <Product> list = productService.findByCategory(category);
		assertEquals(3, list.size());
		verify(productDAO, times(1)).findByCategory(category);
	}
}
