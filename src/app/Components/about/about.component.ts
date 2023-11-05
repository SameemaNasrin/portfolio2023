import { Component } from '@angular/core';
import { AppConfigs } from 'src/app/configs/AppConfigs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  experience: any[] = [];
  education: any[] = [];

  constructor(private config: AppConfigs) {}

  ngOnInit(): void {
    this.loadExpList();
    this.loadEduList();
  }

  loadExpList():void {
    this.experience = this.config.ExperienceList;
  }

  loadEduList():void {
    this.education = this.config.EducationList;
  }
}
