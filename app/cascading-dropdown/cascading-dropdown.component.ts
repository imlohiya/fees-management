import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cascading-dropdown',
  templateUrl: './cascading-dropdown.component.html',
  styleUrls: ['./cascading-dropdown.component.css']
})
export class CascadingDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedCourse: String = "--Choose Course--";
  
	Courses: Array<any> = [
		{ name: 'POLYTECHNIC', branches: [ {name: 'CSE', classes: ['FE', 'SE', 'TE']},{name: 'MECH', classes: ['FE', 'SE', 'TE']},{name: 'CIVIL', classes: ['FE', 'SE', 'TE']},{name: 'ELECTRICAL', classes: ['FE', 'SE', 'TE']} ] },
        { name: 'ENGINEERING', branches: [ {name: 'CSE', classes: ['FE', 'SE', 'TE', 'BE']},{name: 'MECH', classes: ['FE', 'SE', 'TE', 'BE']},{name: 'CIVIL', classes: ['FE', 'SE', 'TE', 'BE']},{name: 'ELECTRICAL', classes: ['FE', 'SE', 'TE', 'BE']} ] },
		{ name: 'MBA', branches: [ {name: 'MBA', classes: ['FE', 'SE', 'TE', 'BE']} ] },
	];
  
	branches: Array<any> = [];
	classes: Array<any> = [];
	changeCourse(course: any) { 
		this.branches = this.Courses.find((corse: any) => corse.name == course.target.value).branches;
	}

	changeBranch(branch: any) {
		this.classes = this.Courses.find((corse: any) => corse.name == this.selectedCourse).branches.find((stat: any) => stat.name == branch.target.value).classes;
	}

}
