import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { InjectionToken, NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './list/list.component';


const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const deactivateGuard = new InjectionToken('deactivateGuard');


const routes: Routes = [

 {
    path: 'externalRedirect',
    canActivate: [externalUrlProvider],
    // We need a component here because we cannot define the route otherwise
    component: NotFoundComponent,
  },

  {path: 'list', component: ListComponent, canDeactivate: [deactivateGuard]},

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
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
