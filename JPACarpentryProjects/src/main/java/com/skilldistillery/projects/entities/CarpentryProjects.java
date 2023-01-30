package com.skilldistillery.projects.entities;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "carpentry_projects")
public class CarpentryProjects {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private String description;
	
	@Column(name = "job_type")
	private String jobType;
	
	private String location;
	
	@Column(name = "img_url")
	private String imgUrl;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date date;
	
	private String helpers;
	@Column(name = "customer_name")
	private String customerName;
	
	
	
	
	public CarpentryProjects() {
		super();
	}
	
	
	public int getId() {
		return id;
	}public CarpentryProjects(int id, String title, String description, String jobType, String location, String imgUrl,
			Date date, String helpers, String customerName) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.jobType = jobType;
		this.location = location;
		this.imgUrl = imgUrl;
		this.date = date;
		this.helpers = helpers;
		this.customerName = customerName;
	}


	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getJobType() {
		return jobType;
	}
	public void setJobType(String jobType) {
		this.jobType = jobType;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getHelpers() {
		return helpers;
	}
	public void setHelpers(String helpers) {
		this.helpers = helpers;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	@Override
	public String toString() {
		return "CarpentryProjects [id=" + id + ", title=" + title + ", description=" + description + ", jobType="
				+ jobType + ", location=" + location + ", imgUrl=" + imgUrl + ", date=" + date + ", helpers=" + helpers
				+ ", customerName=" + customerName + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CarpentryProjects other = (CarpentryProjects) obj;
		return id == other.id;
	}
	
	
}
