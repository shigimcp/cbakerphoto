import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../navigation.service';

import * as navMenu from '../../assets/data/json/navMenu_test.json';
// import * as navMenu from '../../assets/data/json/navMenu.json';


@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

    title = 'Main Navigation';

    constructor(private navigationService: NavigationService) { }


    navItems: any[] = (navMenu as any).navMenu;


    public ngOnInit(): void {
    }


    navToggle(): void {
        this.navigationService.toggle();
    }

    navClose(): void {
        this.navigationService.close();
    }
}
