import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { InjectionToken, NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';


const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const deactivateGuard = new InjectionToken('deactivateGuard');


const routes: Routes = [

 {
    path: 'externalRedirect',
    canActivate: [externalUrlProvider],
    // We need a component here because we cannot define the route otherwise
    component: NotFoundComponent,
  },

  {path: 'list', component: HeaderComponent, canDeactivate: [deactivateGuard]},
  // { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
  ],
  exports: [RouterModule],
   providers: [
        {
            provide: externalUrlProvider,
            useValue: (route: ActivatedRouteSnapshot) => {

                const externalUrl = route.paramMap.get('externalUrl');
                window.open(externalUrl, '_self');
            },
        },
        {
          provide: deactivateGuard,
          useValue: () => {
            console.log('Guard function is called!')

            return false;
          }
        },
    ],
})
export class AppRoutingModule { }
