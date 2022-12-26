import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { ExternalUrlDirective } from './external-url.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { SafePipe } from './safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './footer/footer.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { GodSaysComponent } from './god-says/god-says.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { GithubPinnedReposComponent } from './github-pinned-repos/github-pinned-repos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SafePipe,
    NotFoundComponent,
    ExternalUrlDirective,
    FooterComponent,
    NowPlayingComponent,
    GodSaysComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    GithubPinnedReposComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
