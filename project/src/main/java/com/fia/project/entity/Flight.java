package com.fia.project.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="flight")
public class Flight {
	
	// define fields
	
	@Column(name="destination")
	private String destination;
	
	@Column(name="time")
	private int time;
	
	@Column(name="terminal")
	private String terminal;
	
	@Column(name="gate_no")
	private String gateNo;
	
	@Column(name="is_arriving")
	private int isArriving;
	
	@Column(name="is_international")
	private String isInternational;
	
	@ManyToOne(cascade= {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
	@JoinColumn(name="id")
	private Plane plane;
	
	// define constructors
	
	public Flight() {}

	public Flight(String destination, int time, String terminal, String gateNo, int isArriving,
			String isInternational) {
		this.destination = destination;
		this.time = time;
		this.terminal = terminal;
		this.gateNo = gateNo;
		this.isArriving = isArriving;
		this.isInternational = isInternational;
	}

	// generate getters and setters

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

	public String getIsInternational() {
		return isInternational;
	}

	public void setIsInternational(String isInternational) {
		this.isInternational = isInternational;
	}
	
	public Plane getPlane() {
		return plane;
	}

	public void setPlane(Plane plane) {
		this.plane = plane;
	}
	
	// define toString()

	@Override
	public String toString() {
		return "Flight [destination=" + destination + ", time=" + time + ", terminal=" + terminal
				+ ", gateNo=" + gateNo + ", isArriving=" + isArriving + ", isInternational=" + isInternational + "]";
	}
	
}
