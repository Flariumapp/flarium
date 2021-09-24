package com.fia.project.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fia.project.config.JwtTokenUtil;
import com.fia.project.entity.JwtRequest;
import com.fia.project.entity.JwtResponse;
import com.fia.project.entity.UserDto;
import com.fia.project.service.UserService;
import com.fia.project.service.UserServiceImpl;

@RestController
@CrossOrigin
public class JwtAuthenticationController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UserService userDetailsService;
	
	@PreAuthorize("permitAll()")
	@CrossOrigin
	@PostMapping("/authenticate")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		final Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						authenticationRequest.getUsername(), 
						authenticationRequest.getPassword()
				)
		);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		final String token = jwtTokenUtil.generateToken(authentication);

		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	@PreAuthorize("permitAll()")
	@CrossOrigin
	@PostMapping(value = "/register")
	public ResponseEntity<?> saveUser(@RequestBody UserDto user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}
	
	private void authenticate(String username, String password) throws Exception {
		try {
			
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}