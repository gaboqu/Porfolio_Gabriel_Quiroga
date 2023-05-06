import { Component } from '@angular/core';
import { EduService } from 'src/app/servicios/edu.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  constructor(private eduService: EduService) {}

  edu: any;

  ngOnInit(): void {
    this.eduService.educa().subscribe((data) => {
      this.edu = data;
     
    });
  }
}

