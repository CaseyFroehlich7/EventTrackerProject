import { CarpentryProjectsService } from './../../services/carpentry-projects.service';
import { Component, OnInit } from '@angular/core';
import { CarpentryProjects } from 'src/app/models/carpentry-projects';

@Component({
  selector: 'app-carpentry-projects',
  templateUrl: './carpentry-projects.component.html',
  styleUrls: ['./carpentry-projects.component.css'],
})
export class CarpentryProjectsComponent implements OnInit {


  projects: CarpentryProjects[] = [];
  editCarpentryProjects: CarpentryProjects | null = null;
  constructor(private carpentryProjectsService: CarpentryProjectsService) {}
  selected: CarpentryProjects | null = null;
  newCarpentryProject: CarpentryProjects = new CarpentryProjects();



  loadProjects() {
    this.carpentryProjectsService.index().subscribe({
      next: (projectList) => {
        this.projects = projectList;
      },
      error: (oof) => {
        console.error('Error loading project list:');
        console.error(oof);
      },
    });
  }

  createCarpentryProjects(carpentyprojects : CarpentryProjects) {
    console.log(carpentyprojects);
    this.carpentryProjectsService.create(this.newCarpentryProject).subscribe({
      next: (carpentryProject) => {
        this.loadProjects();
        this.newCarpentryProject = new CarpentryProjects();
      },
      error: (err) => {
        console.log('CarpentryListComponent.createCarpentryProjects(): error creating project');
        console.log(err);
      }
    });
    this.loadProjects();
    }

    ngOnInit() {
      this.loadProjects();
    }


    // showCarpentryProjects(id:number){
    //   this.carpentryProjectsService.show(id).subscribe(
    //     success => {
    //       this.selected = success;
    //       if(!this.selected){
    //         this.router.navigateByUrl('**')
    //       }
    //       },
    //       error => console.log("Obersable got an error" + error)
    //     );


    // }
    displayTable(){
      this.selected = null;
    }

    setEditCarpentryProjects(project : CarpentryProjects): void {
      this.editCarpentryProjects = Object.assign({}, project);
    }

    displayCarpentryProjects(){
      this.selected = null;
    }

    updateCarpentryProject(carpentryProjects : CarpentryProjects) {
      this.carpentryProjectsService.update(carpentryProjects).subscribe({
        next: (projects) => {
          this.loadProjects();
          this.selected = carpentryProjects;
         this.editCarpentryProjects = null;
        },
        error: (toobad) => {
          console.error("CarpentryProjectsComponent.updateCarpentryProject(): error updating");
          console.error(toobad);
        }
      });

    }

    deleteCarpentryProjects(projectId: number){
    this.carpentryProjectsService.delete(projectId).subscribe({
      next: () => {
        this.loadProjects();
      },
      error: (fail) => {
        console.error('CarpentryProjectsComponent.deleteCarpentryProject(): error deleting');
        console.error(fail);
      },
    });
  }













}
