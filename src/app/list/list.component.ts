import { Component, OnInit } from '@angular/core';
import { List } from '../../classes/list';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']


})



export class ListComponent implements OnInit {

list: List = {
title: "* justin diaz ...",
content: "blablablabla"
}

  constructor() { }

  ngOnInit() {
  }

  toggleTitleClicked() {
        List.titleClicked = !List.titleClicked;
        console.log("toggleTitleClicked");
    }


}
