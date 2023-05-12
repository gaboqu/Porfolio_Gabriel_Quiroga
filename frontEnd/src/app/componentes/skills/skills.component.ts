import { Component } from '@angular/core';
import { SkillService } from 'src/app/servicios/skill.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

constructor(private skillService:SkillService){}

skills: any;

  ngOnInit(): void{
    this.skillService.skil().subscribe((data) => {
      this.skills = data;
    });
  }

}


