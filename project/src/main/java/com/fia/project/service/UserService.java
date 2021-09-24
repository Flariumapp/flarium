package com.fia.project.service;

import java.util.List;

import com.fia.project.entity.User;
import com.fia.project.entity.UserDto;

public interface UserService {
	User save(UserDto user);
	List <User> findAll();
	User findOne(String username);
}
