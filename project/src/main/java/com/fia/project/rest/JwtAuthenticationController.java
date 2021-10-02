package com.fia.project.rest;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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

		String email = authenticationRequest.getUsername();
		com.fia.project.entity.User user = userDetailsService.findOne(email);
		
		if(user.getEnabled() == 0) {
			throw new Exception("Account not verified");
		}
		
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
	public ResponseEntity<?> saveUser(@RequestBody UserDto user, HttpServletRequest request) throws Exception {
		com.fia.project.entity.User savedUser = userDetailsService.save(user);
		String siteUrl = request.getRequestURL().toString();
		siteUrl.replace(request.getServletPath(), "");
		userDetailsService.sendVerificationEmail(savedUser, siteUrl);
		return ResponseEntity.ok(savedUser);
	}
	
	@GetMapping("/register/verify")
	public ResponseEntity <?> verifyAccount(@Param("code") String code) {
		boolean verified = userDetailsService.verify(code);
		return verified ? ResponseEntity.ok("Congratulations! Your account has been verified.\nYou can now login using your email and password")
						: ResponseEntity.ok("Your account was already verified or the verification code is invalid");
	}
	
}