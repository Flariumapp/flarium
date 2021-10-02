package com.fia.project.service;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.mail.MessagingException;

import com.fia.project.entity.User;
import com.fia.project.entity.UserDto;

public interface UserService {
	User save(UserDto user);
	List <User> findAll();
	User findOne(String username);
	void sendVerificationEmail(com.fia.project.entity.User user, String siteUrl) throws UnsupportedEncodingException, MessagingException;
	boolean verify(String verificationCode);
}
