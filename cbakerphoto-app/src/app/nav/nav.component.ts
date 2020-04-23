// REF: https://www.djamware.com/post/5e68fed117a293152d794fc9/angular-9-tutorial-angular-component-example#components-communication
// REF: https://stackoverflow.com/questions/52946051/angular-how-can-i-toggle-the-visibility-of-an-element-in-a-component-from-anot/52946450


import { Component, OnInit } from '@angular/core';
// import { Input } from '@angular/core';
// import { ViewChild } from '@angular/core';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';

import * as navMenu from '../../assets/data/json/navMenu.json';


@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

    // @Input() thisGallery;

    constructor() { }

    navItems: any[] = (navMenu as any).navMenu;

    // @ViewChild(MatToolbarModule) sidenav: MatToolbarModule;
    // @ViewChild(MatSidenavModule) sidenav: MatSidenavModule;
    // @ViewChild(MatIconModule) sidenav: MatIconModule;

    mobile = false;

    ngOnInit(): void {
        // if (window.screen.width === 360) { // 768px portrait
        //     this.mobile = true;
        // }
    }

    navClick() {
        console.log('navClick() triggered!');
        // this.sidenav.toggle();
    }
}
