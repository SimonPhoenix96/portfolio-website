import { Component, OnInit } from '@angular/core';

let date: Date = new Date();

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  currentYear: Number = date.getFullYear();
  

  constructor() {
   }

  ngOnInit(): void {


  }

}
