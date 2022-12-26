import { Component } from '@angular/core';
import {List} from '../../classes/list';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {




  contactText: string = 
    "TEST"
  
  // contactTextJoined = this.contactText.join("");


  contactList: List[] = [{
    title: "* Contact ...",
    content: this.contactText
  },
]


}
