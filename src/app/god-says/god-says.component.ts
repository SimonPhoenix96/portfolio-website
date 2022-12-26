import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RestApiService} from '../rest-api.service'
import { Observable} from 'rxjs';
@Component({
  selector: 'app-god-says',
  templateUrl: './god-says.component.html',
  styleUrls: ['./god-says.component.css']
})
export class GodSaysComponent implements OnInit {

  ladBibleBook$: string;
  ladBibleVerse$: string;
  ladBibleChapter$: string;
  ladBibleText$: string;

  constructor(private http: HttpClient, private RestApi: RestApiService) {


  }

 ngOnInit(): void {
  this.RestApi.getGodSays().subscribe(data => {


    console.log(JSON.stringify(data));
    
    this.ladBibleBook$ = data['contents']['book'];
    this.ladBibleVerse$ = data['contents']['number'];
    this.ladBibleChapter$ = data['contents']['chapter'];
    this.ladBibleText$ = data['contents']['verse'];
    
    
    
    })

 }

}
