package com.fia.project.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;

@Entity
@Table(name="flights")
public class Flight {
	
	@Id
	@Column(name="id")
	private String id;
	
	@Column(name="destination")
	@NotNull
	private String destination;
	
	@Column(name="time")
	@NotNull
	private int time;
	
	@Column(name="terminal")
	@NotNull
	private String terminal;
	
	@Column(name="gate_no")
	@NotNull
	private String gateNo;
	
	@Column(name="is_arriving")
	@NotNull
	private int isArriving;
	
	@Column(name="is_international")
	@NotNull
	private int isInternational;
	
	@JsonBackReference
	@ManyToOne(cascade={CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE})
	@JoinColumn(name="company")
	private Company company;
	
	public Flight() {}

	public Flight(String id, String destination, int time, String terminal, String gateNo,
			int isArriving, int isInternational) {
		this.id = id;
		this.destination = destination;
		this.time = time;
		this.terminal = terminal;
		this.gateNo = gateNo;
		this.isArriving = isArriving;
		this.isInternational = isInternational;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public int getTime() {
		return time;
	}

	public void setTime(int time) {
		this.time = time;
	}

	public String getTerminal() {
		return terminal;
	}

	public void setTerminal(String terminal) {
		this.terminal = terminal;
	}

	public String getGateNo() {
		return gateNo;
	}

	public void setGateNo(String gateNo) {
		this.gateNo = gateNo;
	}

	public int getIsArriving() {
		return isArriving;
	}

	public void setIsArriving(int isArriving) {
		this.isArriving = isArriving;
	}

	public int getIsInternational() {
		return isInternational;
	}

	public void setIsInternational(int isInternational) {
		this.isInternational = isInternational;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	@Override
	public String toString() {
		return "Flight [id=" + id + ", destination=" + destination + ", time=" + time + ", terminal=" + terminal
				+ ", gateNo=" + gateNo + ", isArriving=" + isArriving + ", isInternational=" + isInternational + "]";
	}

}