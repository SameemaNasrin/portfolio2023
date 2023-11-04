import { Component, OnInit } from '@angular/core';
import { AppConfigs } from '../../configs/AppConfigs';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  ProjectList:any[] = [];
  projectCount: number = 0;
  constructor(private config: AppConfigs) {}

  ngOnInit(): void {
    this.loadProjectList();
  }

  loadProjectList():void {
    this.ProjectList = this.config.ProjectList;
    this.projectCount = this.ProjectList.length
  }
}
