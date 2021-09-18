package com.fia.project.dao;

import java.util.List;

import com.fia.project.entity.Product;

public interface ProductDAO {
	public List <Product> findAll();
	
	public List <Product> saveProducts(List <Product> products);
	
	public List <Product> findByCategory(String category);
}
