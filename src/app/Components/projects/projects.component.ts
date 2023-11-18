import { Component, OnInit } from '@angular/core';
import { AppConfigs } from '../../configs/AppConfigs';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  ProjectList: any[] = [];
  projectCount: number = 0;
  constructor(private config: AppConfigs) { }

  ngOnInit(): void {
    this.loadProjectList();
  }

  loadProjectList(): void {
    this.ProjectList = this.config.ProjectList;
    this.projectCount = this.ProjectList.length
  }

  changeImage(projectImg: string): void {
    var element = document.getElementById('project-hex');
    if (element) {
      element.style.backgroundImage = "url('" + projectImg + "')";
      element.style.backgroundPosition = "center center";
    } else {
      console.log("Element with ID 'project-image-tag' not found");
    }
  }

  defaultImage(): void {
    var element = document.getElementById('project-hex');
    if (element) {
      element.style.backgroundPosition = "center 200%";
    } else {
      console.log("Element with ID 'project-image-tag' not found");
    }
  }

  setDefaultImage(): void {
    var element = document.getElementById('project-hex');
    if (element) {
      setTimeout((element: HTMLElement) => {
        element.style.backgroundImage = "url('assets/projectDefault.svg')";
        element.style.backgroundPosition = "center center";
      }, 50, element);
    } else {
      console.log("Element with ID 'project-image-tag' not found");
    }
  }
}
