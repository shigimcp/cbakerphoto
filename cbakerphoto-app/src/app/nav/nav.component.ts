// REF: https://angular.io/tutorial/toh-pt4
// REF: https://www.djamware.com/post/5e68fed117a293152d794fc9/angular-9-tutorial-angular-component-example#components-communication
// REF: https://stackoverflow.com/questions/48073057/open-close-sidenav-from-another-component
// REF: https://stackoverflow.com/questions/61566773/angular-9-1-4-ng-bootstrap-6-1-modal-content-does-not-support-custom-component-r
// REF: https://github.com/ManuCutillas/ngx-responsive/tree/master/examples


import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


import { NavigationService } from '../navigation.service';
import * as navMenu from '../../assets/data/json/navMenu.json';

import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IeInfoRx, ResponsiveSizeInfoRx, OrientationInfoRx, DeviceStandardInfoRx, DeviceInfoRx, UserAgentInfoRx, BrowserInfoRx } from 'ngx-responsive';


@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})


// export class NavComponent implements OnInit {
export class NavComponent implements OnInit, OnDestroy {

    title = 'Main Navigation';

    // constructor(private navigationService: NavigationService) { }

    constructor(
        private navigationService: NavigationService,
        public ieInfoRx: IeInfoRx,
        public browserInfoRx: BrowserInfoRx,
        public devicesInfoRx: DeviceInfoRx,
        public devicesStandardInfoRx: DeviceStandardInfoRx,
        public orientationInfoRx: OrientationInfoRx,
        public responsiveSizeInfoRx: ResponsiveSizeInfoRx,
        public userAgentInfoRx: UserAgentInfoRx
    ) { }


    public screenWidth: any;
    public screenHeight: any;

    navItems: any[] = (navMenu as any).navMenu;


    // ngOnInit(): void {
    //     console.log('-------------------------');
    //     console.log('NAV: ngOnInit() triggered!');

    //     this.screenWidth = window.innerWidth;
    //     this.screenHeight = window.innerHeight;

    //     console.log('this.screenWidth = ' + this.screenWidth);
    //     console.log('this.screenHeight = ' + this.screenHeight);
    // }


    private subscriptions: Subscription[] = [];

    public ngOnInit(): void {
        console.log('-------------------------');
        console.log('NAV: ngOnInit() triggered!');

        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        console.log('this.screenWidth = ' + this.screenWidth);
        console.log('this.screenHeight = ' + this.screenHeight);


        console.log('-------------------------');
        this._subscribe();
        this.ieInfoRx.connect();
        this.browserInfoRx.connect();
        this.devicesInfoRx.connect();
        this.devicesStandardInfoRx.connect();
        this.orientationInfoRx.connect();
        this.responsiveSizeInfoRx.connect();
        this.userAgentInfoRx.connect();
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


    @HostListener('window:resize', ['$event'])

    onResize(event: any) {
        // console.log('-------------------------');
        // console.log('NAV: onResize() triggered!');

        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        // console.log('this.screenWidth = ' + this.screenWidth);
        // console.log('this.screenHeight = ' + this.screenHeight);
    }



    public ngOnDestroy(): void {
        this._unsubscribe();
        this.ieInfoRx.disconnect();
        this.browserInfoRx.disconnect();
        this.devicesInfoRx.disconnect();
        this.devicesStandardInfoRx.disconnect();
        this.orientationInfoRx.disconnect();
        this.responsiveSizeInfoRx.disconnect();
        this.userAgentInfoRx.disconnect();
    }

    public thisUserAgent(userAgent) {
        console.log('userAgent ==========>', userAgent);
    }

    private _subscribe(): void {
        this.subscriptions.push(
            this.ieInfoRx.getIE.subscribe((data) => {
                console.log('this.ieInfoRx.getIE ===>', data);
            }, (err) => {
                console.log('Error', err);
            })
        );
        this.subscriptions.push(
            this.browserInfoRx.getBrowser.subscribe((data) => {
                console.log('this.browserInfoRx.getBrowser ===>', data);
            }, (err) => {
                console.log('Error', err);
            })
        );
        this.subscriptions.push(
            this.devicesInfoRx.getDevice.subscribe((data) => {
                console.log('this.devicesInfoRx.getDevice ===>', data);
            }, (err) => {
                console.log('Error', err);
            })
        );
        this.subscriptions.push(
            this.devicesStandardInfoRx.getStandardDevice.subscribe((data) => {
                console.log('this.devicesStandardInfoRx.subject$ ===>', data);
            }, (err) => {
                console.log('Error', err);
            })
        );
        this.subscriptions.push(
            this.orientationInfoRx.getOrientation.subscribe((data) => {
                console.log('this.orientationInfoRx.getOrientation ===>', data);
            }, (err) => {
                console.log('Error', err);
            })
        );
        this.subscriptions.push(
            this.responsiveSizeInfoRx.getResponsiveSize.subscribe((data) => {
                console.log('this.responsiveSizeInfoRx.getResponsiveSize ===>', data);
            }, (err) => {
                console.log('Error', err);
            })
        );
        this.subscriptions.push(
            this.userAgentInfoRx.getUserAgent.subscribe((data) => {
                console.log('this.userAgentInfoRx.getUserAgent ===>', data);
            }, (err) => {
                console.log('Error', err);
            })
        );
    }

    private _unsubscribe(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }
}
