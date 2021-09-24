package com.fia.project.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fia.project.entity.User;

@Repository
public interface UserDao extends CrudRepository<User, Integer>{
	User findByUsername(String username);
}
