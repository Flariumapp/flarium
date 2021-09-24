package com.fia.project.dao;

import java.util.List;

import com.fia.project.entity.Product;

public interface ProductDAO {
	public List <Product> findAll();
	
	public Product saveProduct(Product product);
	
	public List <Product> findByCategory(String category);
}
