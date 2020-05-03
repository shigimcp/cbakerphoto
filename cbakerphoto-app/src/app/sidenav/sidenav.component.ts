// REF: https://angular.io/tutorial/toh-pt4
// REF: https://www.djamware.com/post/5e68fed117a293152d794fc9/angular-9-tutorial-angular-component-example#components-communication
// REF: https://stackoverflow.com/questions/48073057/open-close-sidenav-from-another-component


import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';

import { NavigationService } from '../navigation.service';
import * as navMenu from '../../assets/data/json/navMenu.json';


@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent implements OnInit, AfterViewInit {

    title = 'Side Navigation';

    constructor(private navigationService: NavigationService) { }


    @ViewChild(MatSidenav) sidenav: MatSidenav;

    navItems: any[] = (navMenu as any).navMenu;


    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        // console.log('-------------------------');
        // console.log('SIDENAV: ngAfterViewInit() triggered!');
        // console.log('  - this.sidenav = ' + this.sidenav);

        this.navigationService.setSidenav(this.sidenav);
    }
}
