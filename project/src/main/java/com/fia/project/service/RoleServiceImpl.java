package com.fia.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fia.project.dao.RoleDao;
import com.fia.project.entity.Role;

@Service
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleDao roleDao;
	
	@Override
	public Role findByName(String name) {
		return roleDao.findRoleByName(name);
	}

	@Override
	public Role save(Role role) {
		return roleDao.save(role);
	}

}
