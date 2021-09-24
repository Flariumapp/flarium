package com.fia.project.rest;

import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
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
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fia.project.dao.FlightDAO;
import com.fia.project.entity.Company;

@AutoConfigureMockMvc
@SpringBootTest
@ActiveProfiles("test")
class FlightRestControllerTest {
	@MockBean
	private FlightDAO flightDAO;
	
	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void getCompanyTest() throws Exception {
		Company c = new Company("SG", "Spice Jet", "url");
		List <Company> companies = new ArrayList <>();
		companies.add(c);
		when(flightDAO.getCompanies()).thenReturn(companies);
		mockMvc.perform(get("/api/companies"))
			.andDo(print())
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.size()", is(1)));
		verify(flightDAO, times(1)).getCompanies();
	}
	
	@Test
	public void addCompanyTest() throws Exception {
		Company c = new Company("SG", "Spice Jet", "url");
		when(flightDAO.addCompany(c)).thenReturn(c);
		mockMvc.perform(
			post("/api/companies")
			.contentType(MediaType.APPLICATION_JSON)
			.content(asJsonString(c))
			.accept(MediaType.APPLICATION_JSON)
		)
		.andDo(print())
		.andExpect(MockMvcResultMatchers.status().isCreated());
		verify(flightDAO).addCompany(c);
	}
	
	public static String asJsonString(final Object obj) {
	    try {
	        final ObjectMapper mapper = new ObjectMapper();
	        final String jsonContent = mapper.writeValueAsString(obj);
	        return jsonContent;
	    } catch (Exception e) {
	        throw new RuntimeException(e);
	    }
	}  
}
