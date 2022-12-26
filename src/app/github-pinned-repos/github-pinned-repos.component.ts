import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from '../rest-api.service'
import { PinnedGithubRepo } from '../../classes/pinnedgithubrepo';

@Component({
  selector: 'app-github-pinned-repos',
  templateUrl: './github-pinned-repos.component.html',
  styleUrls: ['./github-pinned-repos.component.css']
})
export class GithubPinnedReposComponent {
  constructor(private http: HttpClient, private RestApi: RestApiService) {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  pinnedGithubRepos$: PinnedGithubRepo[] = [];


  ngOnInit() {

    this.RestApi.getPinnedGithubRepos().subscribe(res => {
      // console.log(JSON.stringify(data));

      let data = res;
      let count = 1;
      for (let x in data) {
        
        
        let repoDetails = {
          tabtitle:  count,
          repo: data[x]['repo'],
          link:  data[x]['link'],
          image:  data[x]['image'],
          description:  data[x]['description'],
          language:  data[x]['language'],
          languageColor:  data[x]['languageColor'],
          
        }
        // console.log(x + ": "+ JSON.stringify(repoDetails))
        count++;

        this.pinnedGithubRepos$.push(repoDetails);
     }

    })

  }


}
