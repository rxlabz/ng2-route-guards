import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeScreenComponent} from './components/home-screen/home-screen.component';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import {AutreScreenComponent} from './components/autre-screen/autre-screen.component';
import {CanActivateAuthProtected} from './auth/can-activate-auth-protected';
import {CurrentUserResolver} from "./resolver/current-user-resolver";

const routes: Routes = [
    {path: '', pathMatch:'full', redirectTo: '/home'},
    {path: 'login', component: LoginScreenComponent},
    {
        path: 'home', component: HomeScreenComponent,
        canActivate: [CanActivateAuthProtected],
        resolve:{
            user: CurrentUserResolver
        }
    },
    {
        path: 'autre', component: AutreScreenComponent,
        canActivate: [CanActivateAuthProtected]
    },
    {path: '**',pathMatch:'full', redirectTo: '/login'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing:true})],
    exports: [RouterModule],
    providers: [CanActivateAuthProtected]
})
export class RouterBasicsRoutingModule {
}
