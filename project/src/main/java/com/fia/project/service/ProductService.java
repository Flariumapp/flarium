package com.fia.project.service;

import java.util.List;

import com.fia.project.entity.Product;

public interface ProductService {
	public List <Product> findAll();
	
	public List <Product> saveProducts(List <Product> products);
	
	public List <Product> findByCategory(String category);
}
