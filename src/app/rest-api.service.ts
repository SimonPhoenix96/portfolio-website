import { Injectable } from '@angular/core';
import { Observable, timer, Subscription, Subject } from 'rxjs';
import { HttpClient, HttpClientJsonpModule, HttpHeaders,} from '@angular/common/http';
import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';


const lastFMUrl = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=iilupefiascoii&api_key=ec9b73bf71bd369638cf52d90da4cefa&format=json';
const godSaysURL = "https://labs.bible.org/api/?passage=random&type=json&callback=godSays";


@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  private lastFMLastPlayed$: Observable<JSON>;
  private stopPolling = new Subject();

  private godSays$: Observable<Object>;

  // headers = new HttpHeaders()
  //   .append('content-type','application/json')
  //   .append('Access-Control-Allow-Origin', '*')
  //   .append('content-type','application/x-www-form-urlencoded');

  constructor(private http: HttpClient, private RestApi: RestApiService, private jsonp: HttpClientJsonpModule) { 

  this.lastFMLastPlayed$ = timer(1, 60000).pipe(
    switchMap(() => http.get<JSON>(lastFMUrl)),
    retry(),
    share(),
    takeUntil(this.stopPolling)
  );
    
  this.godSays$ = timer(1, 1200000).pipe(
    switchMap(() => http.jsonp(godSaysURL, 'callback')),
    retry(),
    share(),
    takeUntil(this.stopPolling)
  ); 

  }
  

  getLastFMLastPlayed():Observable<JSON>{
    return this.lastFMLastPlayed$;
  }
  
  getGodSays():Observable<Object>{
    return this.godSays$; 
  }
  

}
