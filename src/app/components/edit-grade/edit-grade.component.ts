import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { material } from 'src/app/models/material';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-edit-grade',
  templateUrl: './edit-grade.component.html',
  styleUrls: ['./edit-grade.component.css'],
})
export class EditGradeComponent implements OnInit {
  @Input() grade?: material;
  @Output() qualityUpdated = new EventEmitter<material[]>();
  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {}

  updategrade(grade: material) {
    this.materialService
      .updategrade(grade)
      .subscribe((quality: material[]) => this.qualityUpdated.emit(quality));
  }
  deletegrade(grade: material) {
    this.materialService
      .deletegrade(grade)
      .subscribe((quality: material[]) => this.qualityUpdated.emit(quality));
  }

  creategrade(grade: material) {
    this.materialService
      .creategrade(grade)
      .subscribe((quality: material[]) => this.qualityUpdated.emit(quality));
  }
}
