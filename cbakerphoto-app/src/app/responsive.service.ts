// REF: https://itnext.io/angular-code-design-for-responsive-websites-acd4259a478c
// REF: https://gist.github.com/snewell92/57aa0e064be3f3098a3cf147d1a5659d


import { Injectable } from '@angular/core';
import { HostListener } from '@angular/core';

import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IeInfoRx, ResponsiveSizeInfoRx, OrientationInfoRx, DeviceStandardInfoRx, DeviceInfoRx, UserAgentInfoRx, BrowserInfoRx } from 'ngx-responsive';

import { NavigationService } from './navigation.service';


@Injectable({
    providedIn: 'root'
})


// export class ResponsiveService {
export class ResponsiveService implements OnDestroy {

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

    public userAgentData: UserAgentInfoRx;
    private subscriptions: Subscription[] = [];


    public screenWidth: any;
    public screenHeight: any;

    @HostListener('window:resize', ['$event'])

    onResize(event: any) {
        console.log('-------------------------');
        console.log('RESP SVC: onResize() triggered!');

        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        // console.log('this.screenWidth = ' + this.screenWidth);
        // console.log('this.screenHeight = ' + this.screenHeight);
    }



    public ngOnDestroy(): void {
        console.log('-------------------------');
        console.log('RESP SVC: ngOnDestroy() triggered!');

        this._unsubscribe();
        this.ieInfoRx.disconnect();
        this.browserInfoRx.disconnect();
        this.devicesInfoRx.disconnect();
        this.devicesStandardInfoRx.disconnect();
        this.orientationInfoRx.disconnect();
        this.responsiveSizeInfoRx.disconnect();
        this.userAgentInfoRx.disconnect();
    }

    // public thisUserAgent(userAgent) {
    //     console.log('userAgent ==========>', userAgent);
    // }

    // private _subscribe(): void {
    public _subscribe(): void {
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
                this.userAgentData = data;
            }, (err) => {
                console.log('Error', err);
            })
        );
    }

    private _unsubscribe(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }
}
