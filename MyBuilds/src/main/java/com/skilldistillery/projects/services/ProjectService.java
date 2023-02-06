package com.skilldistillery.projects.services;

import java.util.List;

import com.skilldistillery.projects.entities.CarpentryProjects;

public interface ProjectService {
	
List<CarpentryProjects> allProjects();

public CarpentryProjects getCarpentryProjects(int projectId);

public CarpentryProjects create(CarpentryProjects project);

public CarpentryProjects updated(CarpentryProjects project, int projectId);

boolean deleteById(int projectId);
}
