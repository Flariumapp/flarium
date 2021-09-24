package com.fia.project.rest;

import static org.hamcrest.Matchers.any;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fia.project.entity.Product;
import com.fia.project.service.ProductService;

@AutoConfigureMockMvc
@SpringBootTest
class ProductRestControllerTest {
	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private ProductService productService;

	@Test
	public void getProductsTest() throws Exception {
		List<Product> products = new ArrayList<>();
		products.add(new Product(1, "cup", 10, "utensil", "image"));
		when(productService.findAll()).thenReturn(products);
		mockMvc.perform(get("/shop/products"))
			.andDo(print())
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.size()", is(products.size())));
		verify(productService).findAll();
	}
	
	@Test 
	public void getProductsByIdTest() throws Exception {
		List<Product> products = new ArrayList<>();
		String category = "utensil";
		products.add(new Product(1, "cup", 10, "utensil", "image"));
		when(productService.findByCategory(category)).thenReturn(products);
		mockMvc.perform(get("/shop/products/{category}", category))
			.andDo(print())
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.size()", is(products.size())))
			.andExpect(jsonPath("$[0].category", is(category)));
		verify(productService).findByCategory(category);
	}
	
	@Test
	public void saveProductTest() throws Exception {
		Product product = new Product(1, "cup", 10, "utensil", "imaged");
		when(productService.saveProduct(product)).thenReturn(product);
		this.mockMvc.perform(post("/shop/products")
			.content(asJsonString(product))
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON))
			.andDo(print())
			.andExpect(status().isOk());
//			.andExpect(jsonPath("$.id").exists());
		verify(productService).saveProduct(product);
	}
	
	public static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
