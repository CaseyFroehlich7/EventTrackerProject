package com.skilldistillery.projects.services;

import java.util.List;

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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CarpentryProjects create(CarpentryProjects project) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CarpentryProjects updated(int projectId, CarpentryProjects project) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteById(int projectId) {
		// TODO Auto-generated method stub
		return false;
	}

}
