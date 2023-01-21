package com.skilldistillery.projects.services;

import java.util.List;

import com.skilldistillery.projects.entities.CarpentryProjects;

public interface ProjectService {
List<CarpentryProjects> allProjects();
CarpentryProjects getCarpentryProjects(int projectId);
CarpentryProjects create(CarpentryProjects project);
CarpentryProjects updated(int projectId, CarpentryProjects project);
boolean deleteById(int projectId);
}
