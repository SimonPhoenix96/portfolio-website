import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { ExternalUrlDirective } from './external-url.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { SafePipe } from './safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { GodSaysComponent } from './god-says/god-says.component';





@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SafePipe,
    NotFoundComponent,
    ExternalUrlDirective,
    FooterComponent,
    NowPlayingComponent,
    GodSaysComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
