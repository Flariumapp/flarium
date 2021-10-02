package com.fia.project.service;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fia.project.dao.UserDao;
import com.fia.project.entity.Role;
import com.fia.project.entity.UserDto;

import net.bytebuddy.utility.RandomString;

@Service
@Transactional
public class UserServiceImpl implements UserDetailsService, UserService {

	@Autowired
	private RoleService roleService;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	@Autowired
	private JavaMailSender mailSender;
	
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
		
		newUser.setEnabled(0);
		
		String randomCode = RandomString.make(64);
		newUser.setVerificationCode(randomCode);

		Role role = roleService.findByName("USER");
		Set <Role> roleSet = new HashSet<>();
		roleSet.add(role);
		newUser.setRoles(roleSet); 
		
		return userDao.save(newUser);
	}

	@Override
	public void sendVerificationEmail(com.fia.project.entity.User newUser, String siteUrl) 
				throws UnsupportedEncodingException, MessagingException {
		String subject = "Please verify your registration";
		String senderName = "The Flarium Team";
		String verifyUrl = siteUrl + "/verify?code=" + newUser.getVerificationCode();

		String mailContent = "<p>Dear " + newUser.getFirstName() + " " + newUser.getLastName() + "</p>";
		mailContent += "<p>Please click the below link to verify your registration</p>";
		mailContent += "<h3><a href=" + verifyUrl + ">VERIFY</a></h3>";
		mailContent += "<p>Thank you! <br> The Flarium Team</p>";
		
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		
		helper.setFrom("flariumapp@gmail.com", senderName);
		helper.setTo(newUser.getUsername());
		helper.setSubject(subject);
		helper.setText(mailContent, true);
		
		mailSender.send(message);
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
	
	@Override
	public boolean verify(String verificationCode) {
		com.fia.project.entity.User user = userDao.findByVerificationCode(verificationCode);
		if(user == null || user.getEnabled() > 0) {
			return false;
		}
		userDao.enable(user.getId());
		return true;
	}

}
