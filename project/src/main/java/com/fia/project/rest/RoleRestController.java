package com.fia.project.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fia.project.entity.Role;
import com.fia.project.service.RoleService;

@RestController
public class RoleRestController {
	@Autowired
	private RoleService roleService;
	
	@PreAuthorize("permitAll()")
	@PostMapping("/roles")
	Role saveRole(@RequestBody Role role) {
		return roleService.save(role);
	}
}
