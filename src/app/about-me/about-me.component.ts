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
    "<br><br><div>\
      <div class = \"aboutText\">\
      <img class = \"PicOfMe\"src=\"assets/img/me.jpg\" alt=\"\">\
      Name: Justin Diaz <br>\
      Age: ", String(myAge),"<br>\
      Location: NBG <br>\
      Skills:<br>Angular RXJS Javascript Powershell Python Lua Docker\
      <br><br><br><br> I'm currently working as an Engineer I</div>\
    </div>"
  ]
  aboutTextJoined = this.aboutText.join("");



  aboutMeList: List[] = [{
    title: "* About ...",
    content: this.aboutTextJoined
  },
]


}
