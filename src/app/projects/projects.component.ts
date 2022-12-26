import { Component } from '@angular/core';
import { List } from '../../classes/list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {




  projectsText: string[] =[
    "TEST"]
   

  projectsTextJoined = this.projectsText.join("");

  projectsList: List[] = [{
    title: "* Projects ...",
    content: this.projectsTextJoined
  },
  ]


}
