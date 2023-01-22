package com.skilldistillery.projects.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.projects.entities.CarpentryProjects;
import com.skilldistillery.projects.repositories.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	private ProjectRepository projectRepo;
	
	@Override
	public List<CarpentryProjects> allProjects() {
		return projectRepo.findAll();
	}

	@Override
	public CarpentryProjects getCarpentryProjects(int projectId) {
		CarpentryProjects project = null;
		Optional<CarpentryProjects> projectOpt = projectRepo.findById(projectId);
		if(projectOpt.isPresent()) {
			project = projectOpt.get();
		}
		return project;
	}

	@Override
	public CarpentryProjects create(CarpentryProjects project) {
		return projectRepo.saveAndFlush(project);
		
	}

	@Override
	public CarpentryProjects updated(int id, CarpentryProjects project) {
		CarpentryProjects projectUpdate = getCarpentryProjects(id);
		projectUpdate.setTitle(project.getTitle());
		projectUpdate.setDescription(project.getDescription());
		projectUpdate.setJobType(project.getJobType());
		projectUpdate.setLocation(project.getLocation());
		projectUpdate.setImgUrl(project.getImgUrl());
		projectUpdate.setDate(project.getDate());
		projectUpdate.setHelpers(project.getHelpers());
		projectUpdate.setCustomerName(project.getCustomerName());
		return projectRepo.save(projectUpdate);
	
	}

	@Override
	public boolean deleteById(int projectId) {
		projectRepo.deleteById(projectId);
		return !projectRepo.existsById(projectId);
	}




}


