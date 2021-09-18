package com.fia.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fia.project.dao.ProductDAO;
import com.fia.project.entity.Product;

@Service
public class ProductServiceImpl implements ProductService {
	
	private ProductDAO productDAO;

	@Autowired
	public ProductServiceImpl(ProductDAO productDAO) {
		this.productDAO = productDAO;
	}
	
	@Transactional
	@Override
	public List<Product> findAll() {
		return productDAO.findAll();
	}

	@Transactional
	@Override
	public List<Product> saveProducts(List <Product> products) {
		return productDAO.saveProducts(products);
	}

	@Transactional
	@Override
	public List<Product> findByCategory(String category) {
		return productDAO.findByCategory(category);
	}
	
}
