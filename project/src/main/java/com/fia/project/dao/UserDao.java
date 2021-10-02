package com.fia.project.dao;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fia.project.entity.User;

@Repository
public interface UserDao extends CrudRepository<User, Integer>{
	User findByUsername(String username);
	
	@Query("SELECT c FROM User c WHERE c.verificationCode = ?1")
	User findByVerificationCode(String code);
	
	@Query("UPDATE User c SET c.enabled = 1 WHERE c.id = ?1")
	@Modifying
	void enable(long id);
}
