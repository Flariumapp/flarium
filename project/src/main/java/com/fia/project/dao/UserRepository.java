package com.fia.project.dao;

import org.springframework.data.repository.CrudRepository;

import com.fia.project.entity.UserDao;

public interface UserRepository extends CrudRepository<UserDao, Integer>{
	UserDao findByUsername(String username);
}
