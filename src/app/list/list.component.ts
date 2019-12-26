import { Component, OnInit } from '@angular/core';
import { List } from '../../classes/list';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']


})



export class ListComponent implements OnInit {

aboutText: string[] = [
 "<img class = \"PicOfMe\" src=\"assets/img/me.jpg\" alt=\"\"> <br><br> Location: Nürnberg  <br><br> Name: Justin Diaz <br><br> Age: 24 <br><br><br><br> Just a humble old (Business)-Informatics Student <br> trying to make a living off of stuff I learned from <br> watching Indian Youtube Tutorials."
]
aboutTextJoined = this.aboutText.join("");
contactURLS: string[] = [
  "<a href=\"https://github.com/SimonPhoenix96/\" {{appExternalUrl}} target=\"_blank\">- Github</a><br><br>", "<a href=\"https://de.linkedin.com/in/justin-diaz-39b21b186\" {{appExternalUrl}} target=\"_blank\">- Linkedin</a> <br><br>","<a href=\"mailto:mail@justindiaz.xyz\" {{appExternalUrl}} target=\"_blank\">- Email</a><br><br>"
]

contactURLSJoined = this.contactURLS.join("");

test: string[] = [
  "test"
]

testJoined = this.test.join("");

list: List[] = [
  {title: "* About ...", content: this.aboutTextJoined},
  {title: "* Projects ...",content: this.testJoined},
  {title: "* Services ...", content: this.testJoined},
  {title: "* Contact ...",content: this.contactURLSJoined},
]





  ngOnInit() {


  }

}
