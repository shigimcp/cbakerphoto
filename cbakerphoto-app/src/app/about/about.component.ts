import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

    title = 'Contact / About';

    constructor() { }


    userAgentData: any;


    ngOnInit(): void {
    }


    thisUserAgent(userAgent: any) {
        console.log('userAgent ==========>', userAgent);
        this.userAgentData = userAgent;
    }
}
