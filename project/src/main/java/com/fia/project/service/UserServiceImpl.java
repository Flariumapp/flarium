package com.fia.project.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fia.project.dao.UserDao;
import com.fia.project.entity.Role;
import com.fia.project.entity.UserDto;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {

	@Autowired
	private RoleService roleService;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		com.fia.project.entity.User user = userDao.findByUsername(username);
		if(user == null) {
			throw new UsernameNotFoundException("Invalid username or password");
		}
		return new User(user.getUsername(), user.getPassword(), getAuthority(user));
	}
	
	
	private Set<SimpleGrantedAuthority> getAuthority(com.fia.project.entity.User user) {
		Set <SimpleGrantedAuthority> authorities = new HashSet<>();
		user.getRoles().forEach(role -> {
			authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName()));
		});
		return authorities;
	}

	@Override
	public com.fia.project.entity.User save(UserDto user) {
		com.fia.project.entity.User newUser = user.getUserFromDto();
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		Random rand = new Random();
		int randInt = rand.nextInt(5);
		newUser.setImageValue(randInt);
		Role role = roleService.findByName("USER");
		Set <Role> roleSet = new HashSet<>();
		roleSet.add(role);
		newUser.setRoles(roleSet);
		return userDao.save(newUser);
	}

	@Override
	public List<com.fia.project.entity.User> findAll() {
		List<com.fia.project.entity.User> list = new ArrayList<>();
        userDao.findAll().iterator().forEachRemaining(list::add);
        return list;
	}

	@Override
	public com.fia.project.entity.User findOne(String username) {
		return userDao.findByUsername(username);
	}

}
