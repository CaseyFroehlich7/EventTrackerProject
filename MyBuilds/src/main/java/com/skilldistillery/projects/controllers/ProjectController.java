package com.skilldistillery.projects.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.projects.entities.CarpentryProjects;
import com.skilldistillery.projects.services.ProjectService;

@RestController
@RequestMapping("api")
public class ProjectController {
	
	@Autowired
	private ProjectService projectService;
	
	@GetMapping("carpentryprojects")
	public List<CarpentryProjects> listAllProjects(){
		return projectService.allProjects();
	}

}
