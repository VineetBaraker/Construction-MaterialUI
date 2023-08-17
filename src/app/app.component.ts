import { Component } from '@angular/core';
import { material } from './models/material';
import { MaterialService } from './services/material.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'materials';
  quality: material[] = [];
  gradetoedit?: material;

  constructor(private materialService: MaterialService) {}
  ngOnInit(): void {
    this.materialService
      .getmaterial()
      .subscribe((result: material[]) => (this.quality = result));
  }
  updateGradeList(quality: material[]){
    this.quality=quality;
  }
  inItNewGrade() {
    this.gradetoedit = new material();
  }
  editgrade(grade: material) {
    this.gradetoedit = grade;
  }
}
