package com.fia.project.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fia.project.entity.Product;
import com.fia.project.service.ProductService;

@RestController
@RequestMapping("/shop")
public class ProductRestController {
	private ProductService productService;

	@Autowired
	public ProductRestController(ProductService productService) {
		this.productService = productService;
	}
	
	@CrossOrigin
	@GetMapping("/products")
	public List <Product> getProducts() {
		return productService.findAll();
	}
	
	@CrossOrigin
	@PostMapping("/products")
	public List <Product> saveProducts(@RequestBody List <Product> products) {
		for(Product product: products) {
			System.out.println(product);
		}
		return productService.saveProducts(products);
	}
	
	@CrossOrigin
	@GetMapping("/products/{category}")
	public List <Product> getProductsByCategory(@PathVariable String category) {
		return productService.findByCategory(category);
	}
}
