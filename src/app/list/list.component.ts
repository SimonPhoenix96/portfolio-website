import {
  Component,
  OnInit
} from '@angular/core';
import {
  List
} from '../../classes/list';


let date: Date = new Date();
let myAge: Number = date.getFullYear() - 1996;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']


})



export class ListComponent implements OnInit {


  aboutText: string[] = [
    "<div class = \"AboutText\"> <img class = \"PicOfMe\" src=\"assets/img/me.jpg\" alt=\"\"> <br> Location: Nürnberg  <br><br> Name: Justin Diaz <br><br> Age: ", 
    String(myAge),
    " <br><br><br><br> I'm currently studying (Business)-Informatics<br> and working part-time in IT</div>"
  ]
  aboutTextJoined = this.aboutText.join("");

  contactURLS: string[] = [
    "<br> <div class = \"ContactURLS\"> - <a href=\"https://github.com/SimonPhoenix96/\" {{appExternalUrl}} target=\"_blank\">Github</a><br><br><br>", "- <a href=\"https://de.linkedin.com/in/justin-diaz-39b21b186\" {{appExternalUrl}} target=\"_blank\">Linkedin</a> <br><br><br>", "- <a href=\"mailto:mail@justindiaz.xyz\" {{appExternalUrl}} target=\"_blank\">e-mail</a><br><br><br><div>"
  ]
  contactURLSJoined = this.contactURLS.join("");

  projectsText: string[] = [
    "<br> <div class = \"ProjectsText\"> WIP! Meanwhile check my <a href=\"https://github.com/SimonPhoenix96/\" {{appExternalUrl}} target=\"_blank\">Github</a> where I keep my code.</div>"
  ]
  projectsTextJoined = this.projectsText.join("");

  // servicesText: string[] = [
  //   "WIP!"
  // ]
  //
  // servicesTextJoined = this.servicesText.join("");

  list: List[] = [{
      title: "* About ...",
      content: this.aboutTextJoined
    },
    {
      title: "* Projects ...",
      content: this.projectsTextJoined
    },
    // {title: "* Services ...", content: this.servicesTextJoined},
    {
      title: "* Contact ...",
      content: this.contactURLSJoined
    },
  ]





  ngOnInit() {


  }

}
