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
    "<div class = \"about-container\">\
      <div class = \"aboutText\"> <br> Location: Nürnberg  <br> Name: Justin Diaz <br> Age: ", 
     String(myAge),
      " <br><br><br><br> I'm currently working as a Engineer I</div>\
      <img class = \"PicOfMe\"src=\"assets/img/me.jpg\" alt=\"\">\
    </div>"
  ]
  aboutTextJoined = this.aboutText.join("");



  aboutMeList: List[] = [{
    title: "* About ...",
    content: this.aboutTextJoined
  },
]


}
