package com.fia.project.service;

import java.util.List;

import com.fia.project.entity.Product;

public interface ProductService {
	public List <Product> findAll();
	
	public Product saveProduct(Product product);
	
	public List <Product> findByCategory(String category);
}
