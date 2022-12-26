import {Component,OnInit} from '@angular/core';
import { SafePipe } from '../safe.pipe';
import { HttpClient } from '@angular/common/http';
import {RestApiService} from '../rest-api.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']


})




export class HeaderComponent implements OnInit {
  constructor(private http: HttpClient, private RestApi: RestApiService) {
  }

  pinnedGithubRepos$: JSON;

  ngOnInit() {

    this.RestApi.getPinnedGithubRepos().subscribe(data => {
      console.log(JSON.stringify(data));
      this.pinnedGithubRepos$ = data;
    })

  }

}
