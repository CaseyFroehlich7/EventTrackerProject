package com.skilldistillery.projects.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.projects.entities.CarpentryProjects;

public interface ProjectRepository extends JpaRepository<CarpentryProjects, Integer> {
	
	CarpentryProjects findProjectById(int projectId);

}
