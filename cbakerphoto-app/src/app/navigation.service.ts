// REF: https://angular.io/tutorial/toh-pt4
// REF: https://www.djamware.com/post/5e68fed117a293152d794fc9/angular-9-tutorial-angular-component-example#components-communication
// REF: https://stackoverflow.com/questions/48073057/open-close-sidenav-from-another-component


import { Injectable } from '@angular/core';
import { ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';


@Injectable({
    providedIn: 'root'
})

export class NavigationService {

    constructor() { }


    @ViewChild(MatSidenav) sidenav: MatSidenav;

    galleryImages = [];


    public setSidenav(sidenav: MatSidenav) {
        // console.log('-------------------------');
        // console.log('NAV_SVC: setSidenav() triggered!');
        // console.log('  - this.sidenav = ' + this.sidenav);

        this.sidenav = sidenav;

        // console.log('  - this.sidenav = ' + this.sidenav);
    }

    public open() {
        // console.log('-------------------------');
        // console.log('NAV_SVC: open() triggered!');
        // console.log('  - this.sidenav = ' + this.sidenav);

        // return this.sidenav.open();
        this.sidenav.open();
    }

    public close() {
        // console.log('-------------------------');
        // console.log('NAV_SVC: close() triggered!');
        // console.log('  - this.sidenav = ' + this.sidenav);

        // return this.sidenav.close();
        this.sidenav.close();
    }

    public toggle(): void {
        // console.log('-------------------------');
        // console.log('NAV_SVC: toggle() triggered!');
        // console.log('  - this.sidenav = ' + this.sidenav);

        this.sidenav.toggle();
    }
}
