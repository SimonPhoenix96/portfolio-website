import { Component } from '@angular/core';
import {List} from '../../classes/list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {




  projectsText: string = 
    "<ng-content>\
    <mat-tab-group>\
      <mat-tab label=\"First\"> Content 1 </mat-tab>\
      <mat-tab label=\"Second\"> Content 2 </mat-tab>\
      <mat-tab label=\"Third\"> Content 3 </mat-tab>\
    </mat-tab-group>\
    </ng-content>"
  
  // projectsTextJoined = this.projectsText.join("");


  projectsList: List[] = [{
    title: "* Projects ...",
    content: this.projectsText
  },
]


}
