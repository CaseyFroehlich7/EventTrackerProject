package com.skilldistillery.projects.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
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
public class ProjectController {
	
	@Autowired
	private ProjectService projectService;
	
	@GetMapping("carpentryprojects")
	public List<CarpentryProjects> listAllProjects(){
		return projectService.allProjects();
	}
	
	
	@GetMapping("carpentryprojects/{id}")
	public CarpentryProjects getProjects(@PathVariable Integer id, HttpServletResponse res) {
		System.out.println(id);
		CarpentryProjects project = projectService.getCarpentryProjects(id); 
		if (project == null) {
			res.setStatus(404);
		}
		return project;
	}
	
	@PostMapping("carpentryprojects")
	public CarpentryProjects create(@RequestBody CarpentryProjects project, HttpServletResponse res, HttpServletRequest req) {
		try {
			projectService.create(project);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(project.toString());
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(404);
		}
		return project;
	}
	
	@PutMapping("carpentryprojects/{id}")
	public CarpentryProjects update(@PathVariable Integer id, @RequestBody CarpentryProjects project, HttpServletResponse res) {
		try {
			project = projectService.updated(id, project);
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
	

	@DeleteMapping("carpentryprojects/{id}")
	public void delete(@PathVariable Integer id, HttpServletResponse res) {
		try {
			if (projectService.deleteById(id)) {
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
