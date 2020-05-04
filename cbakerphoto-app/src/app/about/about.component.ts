// REF: https://github.com/ManuCutillas/ngx-responsive/tree/master/examples


import { Component, OnInit } from '@angular/core';

import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IeInfoRx, ResponsiveSizeInfoRx, OrientationInfoRx, DeviceStandardInfoRx, DeviceInfoRx, UserAgentInfoRx, BrowserInfoRx } from 'ngx-responsive';


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})


// export class AboutComponent implements OnInit {
export class AboutComponent implements OnInit, OnDestroy {

    title = 'Contact / About';

    // constructor() { }

    // ngOnInit(): void {
    // }



    userAgentData: UserAgentInfoRx;

    private subscriptions: Subscription[] = [];

    constructor(
        public ieInfoRx: IeInfoRx,
        public browserInfoRx: BrowserInfoRx,
        public devicesInfoRx: DeviceInfoRx,
        public devicesStandardInfoRx: DeviceStandardInfoRx,
        public orientationInfoRx: OrientationInfoRx,
        public responsiveSizeInfoRx: ResponsiveSizeInfoRx,
        public userAgentInfoRx: UserAgentInfoRx
    ) { }

    public ngOnInit(): void {
        this._subscribe();
        this.ieInfoRx.connect();
        this.browserInfoRx.connect();
        this.devicesInfoRx.connect();
        this.devicesStandardInfoRx.connect();
        this.orientationInfoRx.connect();
        this.responsiveSizeInfoRx.connect();
        this.userAgentInfoRx.connect();
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
