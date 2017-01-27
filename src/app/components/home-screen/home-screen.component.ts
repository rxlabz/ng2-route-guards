import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: 'app-home-screen',
    templateUrl: './home-screen.component.html',
    styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

    user: Observable<User>;

    constructor(route:ActivatedRoute) {
        //route.data.pluck('user').subscribe((v)=>this.user);
        this.user = route.snapshot.data['user'];
    }

    ngOnInit() {
    }

}
