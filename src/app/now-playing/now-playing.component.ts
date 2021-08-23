import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {RestApiService} from '../rest-api.service'
import {Observable} from "rxjs";
import { HttpClient, HttpResponse, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NowPlayingComponent implements OnInit {

  lastFMPlayedArtist$: Observable<string>;
  lastFMPlayedTitle$: Observable<string>;
  lastFMPlayedCover$: Observable<string>;
  lastFMPlayedInvidiousLink: string[];
  lastFMPlayedInvidiousLinkJoined: string;
  constructor(private http: HttpClient, private RestApi: RestApiService) {


   }

  ngOnInit(): void {
    this.RestApi.getLastFMLastPlayed().subscribe(data => {
      console.log(data['recenttracks']['track'][0])
      this.lastFMPlayedArtist$ = data['recenttracks']['track'][0]['artist']['#text'];
      this.lastFMPlayedTitle$ = data['recenttracks']['track'][0]['name'];
      this.lastFMPlayedCover$ = data['recenttracks']['track'][0]['image'][2]['#text'];
      // this.lastFMPlayedInvidiousLink$ = "https://yewtu.be/search?q=" + this.lastFMPlayedArtist$ + "%20" + this.lastFMPlayedTitle$;
      this.lastFMPlayedInvidiousLink = [
        "<a onclick=\"window.open('https://youtube.com/search?q=", data['recenttracks']['track'][0]['artist']['#text'].replace(/'/gi, "").replace(/"/gi, "") , "%20" , data['recenttracks']['track'][0]['name'].replace(/'/gi, "").replace(/"/gi, "") ,"', '_blank', 'location=yes,height=650,width=800,scrollbars=yes,status=no');\"  style=\"font-size: 90%;\" class=\"material-icons\">headphones</a>"
      ]
      this.lastFMPlayedInvidiousLinkJoined = this.lastFMPlayedInvidiousLink.join("");
      console.log(this.lastFMPlayedInvidiousLinkJoined)
    })
  }


}
