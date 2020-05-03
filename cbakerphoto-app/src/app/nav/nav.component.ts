// REF: https://angular.io/tutorial/toh-pt4
// REF: https://www.djamware.com/post/5e68fed117a293152d794fc9/angular-9-tutorial-angular-component-example#components-communication
// REF: https://stackoverflow.com/questions/48073057/open-close-sidenav-from-another-component


import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../navigation.service';
import * as navMenu from '../../assets/data/json/navMenu.json';


@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

    title = 'Main Navigation';

    constructor(private navigationService: NavigationService) { }


    navItems: any[] = (navMenu as any).navMenu;


    ngOnInit(): void {
    }


    navToggle(): void {
        // console.log('-------------------------');
        // console.log('NAV: navClick() triggered!');

        this.navigationService.toggle();
    }


    navClose(): void {
        // console.log('-------------------------');
        // console.log('NAV: navClose() triggered!');

        this.navigationService.close();
    }
}
