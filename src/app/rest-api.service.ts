import { Injectable } from '@angular/core';
import { Observable, timer, Subscription, Subject } from 'rxjs';
import { HttpClient, HttpClientJsonpModule, HttpHeaders,} from '@angular/common/http';
import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';


const lastFMUrl = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=iilupefiascoii&api_key=ec9b73bf71bd369638cf52d90da4cefa&format=json';
const godSaysURL = "http://quotes.rest/bible/verse.json";
const githubPinnedReposURL = "https://gh-pinned-repos.egoist.dev/?username=simonphoenix96";


@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  private lastFMLastPlayed$: Observable<JSON>;
  private stopPolling = new Subject();
  private godSaysData$: Observable<JSON>;
  private pinnedGithubRepos$: Observable<JSON>;

  // headers = new HttpHeaders()
  //   .append('content-type','application/json')
  //   .append('Access-Control-Allow-Origin', '*')
  //   .append('content-type','application/x-www-form-urlencoded');

  constructor(private http: HttpClient, private RestApi: RestApiService, private jsonp: HttpClientJsonpModule) { 

  this.lastFMLastPlayed$ = timer(1).pipe(
    switchMap(() => http.get<JSON>(lastFMUrl)),
    share(),
    takeUntil(this.stopPolling)
  );
    
  this.godSaysData$ = timer(1).pipe(
    switchMap(() => http.get<JSON>(godSaysURL)),
    share(),
    takeUntil(this.stopPolling)
  );

  this.pinnedGithubRepos$ = timer(1).pipe(
    switchMap(() => http.get<JSON>(githubPinnedReposURL)),
    share(),
    takeUntil(this.stopPolling)
  );

  }
  

  getLastFMLastPlayed():Observable<JSON>{
    return this.lastFMLastPlayed$;
  }
  
  getGodSays(){
    return this.godSaysData$;
  }
  
  getPinnedGithubRepos(){
    return this.pinnedGithubRepos$;
  }
  
}
