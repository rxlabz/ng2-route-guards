import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {RouterBasicsRoutingModule} from "./app-routing.module";
import {HomeScreenComponent} from './components/home-screen/home-screen.component';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import {AutreScreenComponent} from './components/autre-screen/autre-screen.component';
import {AuthService} from "./auth/auth.service";
import {CanActivateAuthProtected} from "./auth/can-activate-auth-protected";
import {DataService} from "./data/data.service";
import {CurrentUserResolver} from "./resolver/current-user-resolver";

@NgModule({
    declarations: [
        AppComponent,
        HomeScreenComponent,
        LoginScreenComponent,
        AutreScreenComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterBasicsRoutingModule
    ],
    providers: [
        AuthService, CanActivateAuthProtected, DataService, CurrentUserResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
