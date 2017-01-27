# Angular 2 Router Guards & Resolver


## Route guards

routes protégées par identification - [voir l'exemple](https://rxlabz.github.io/ng2-route-guards/)

Il est possible de définir une phase de vérification avant l'ouverture / la fermeture ou le chargement d'une route.

```javascript

// définition de la route
{
    path: 'home', component: HomeScreenComponent,
    canActivate: [CanActivateAuthProtected]
    canActivateChild: [CanActivateChildRightProtected]
    candDeactivate: [CanCloseFormRoute],
    candLoad: [CanLoadOtherModule],
}
```

Cf. src/app/auth/CanActivateAuthProtected » une simple classe de vérification de droits d'accès à une route

## Route data resolver

Les resolver permettent de préparer les données nécessaires à une vue durant l'ouverture d'une route.

```typescript
{
        path: 'home', component: HomeScreenComponent,
        canActivate: [CanActivateAuthProtected],
        resolve:{
            user: CurrentUserResolver
        }
    },
```

La classe CurrentUserResolver doit implémenter Resolve : 

```typescript
@Injectable()
export class CurrentUserResolver implements Resolve<any>{
    constructor(private service:AuthService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        return this.service.getUserInfos(route.params['id']) ;
    }
}
```

__

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
