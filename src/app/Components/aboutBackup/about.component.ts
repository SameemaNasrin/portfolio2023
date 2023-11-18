import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { AppConfigs } from 'src/app/configs/AppConfigs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  experience: any[] = [];
  education: any[] = [];
  experienceImg: any[] = [];
  educationImg: any[] = [];

  constructor(private config: AppConfigs) { }

  ngOnInit(): void {
    this.loadExpList();
    this.loadEduList();
    this.loadExpImgList();
    this.loadEduImgList();
  }

  loadExpList(): void {
    this.experience = this.config.ExperienceList;
  }

  loadEduList(): void {
    this.education = this.config.EducationList;
  }

  loadExpImgList(): void {
    this.experienceImg = this.config.ExperienceImgList;
  }

  loadEduImgList(): void {
    this.educationImg = this.config.EducationImgList;
  }

  changeImage(i: number, expedu: string): void {
    var element = document.getElementById('project-hex');
    if (element) {
      element.style.backgroundImage = (expedu === 'exp') ? "url('" + this.experienceImg[i] + "')" : element.style.backgroundImage = "url('" + this.educationImg[i] + "')";
      element.style.backgroundPosition = "center center";
    } else {
      console.log("Element with ID 'project-image-tag' not found");
    }
  }

  defaultImage(): void {
    var element = document.getElementById('project-hex');
    if (element) {
      element.style.backgroundPosition = "center 2000%";
    } else {
      console.log("Element with ID 'project-image-tag' not found");
    }
  }

  setDefaultImage(): void {
    var element = document.getElementById('project-hex');
    if (element) {
      setTimeout((element: HTMLElement) => {
        element.style.backgroundImage = "url('assets/profilePic1.jpg')";
        element.style.backgroundPosition = "center center";
      }, 50, element);
    } else {
      console.log("Element with ID 'project-image-tag' not found");
    }
  }
}
