package com.skilldistillery.projects.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.projects.entities.CarpentryProjects;
import com.skilldistillery.projects.services.ProjectService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost/"})
public class ProjectController {
	
	@Autowired
	private ProjectService projectService;
	
	@GetMapping("carpentryprojects")
	public List<CarpentryProjects> allProjects(){
		return projectService.allProjects();
	}
	
	
	@GetMapping("carpentryprojects/{projectId}")
	public CarpentryProjects getCarpentryProjects(HttpServletRequest req, HttpServletResponse res, @PathVariable int projectId) {
		System.out.println(projectId);
		CarpentryProjects project = projectService.getCarpentryProjects(projectId); 
		if (project == null) {
			res.setStatus(404);
		}
		return project;
	}
	
	@PostMapping("carpentryprojects")
	public CarpentryProjects create(HttpServletRequest req, HttpServletResponse res, @RequestBody CarpentryProjects project) {
		try {
			project = projectService.create(project);
			if (project != null) {
				res.setStatus(201);
				StringBuffer url = req.getRequestURL();
				url.append("/").append(project.getId());
				res.setHeader("Location", url.toString());
			} else {
				res.setStatus(401);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			project = null;

		}
		return null;
	}
	
	@PutMapping("carpentryprojects/{projectId}")
	public CarpentryProjects updated(HttpServletRequest req, HttpServletResponse res, @RequestBody CarpentryProjects project, @PathVariable int projectId) {
		try {
			project = projectService.updated(project, projectId);
			if(project == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			project = null;
		}
		return project;
	}
	

	@DeleteMapping("carpentryprojects/{projectId}")
	public void delete(HttpServletRequest req, HttpServletResponse res, @PathVariable int projectId) {
		try {
			if (projectService.deleteById(projectId)) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
	}
}
