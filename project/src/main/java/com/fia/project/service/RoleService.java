package com.fia.project.service;

import com.fia.project.entity.Role;

public interface RoleService {
	Role findByName(String name);
	Role save(Role role);
}
