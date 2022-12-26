import { Component } from '@angular/core';
import {List} from '../../classes/list';


let date: Date = new Date();
let myAge: Number = date.getFullYear() - 1996;

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {




  aboutText: string[] = [
    "<div class = \"AboutText\"> <img class = \"PicOfMe\" src=\"assets/img/me.jpg\" alt=\"\"> <br> Location: Nürnberg  <br><br> Name: Justin Diaz <br><br> Age: ", 
    String(myAge),
    " <br><br><br><br> I'm currently working as a Software Engineer</div>"
  ]
  aboutTextJoined = this.aboutText.join("");



  aboutMeList: List[] = [{
    title: "* About ...",
    content: this.aboutTextJoined
  },
]


}
