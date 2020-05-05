// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit } from '@angular/core';
// import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';

import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Classic from '../../assets/data/json/classic.json';

import { ResponsiveService } from '../responsive.service';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})


export class GalleryComponent implements OnInit {

    title = 'Gallery (Test Area)';
    // thisGallery: 'classic';

    // userAgentData: any;

    constructor(private responsiveService: ResponsiveService) { }


    // ========================= MASONRY: defs =========================
    classicItems: any[] = (Classic as any).classic;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];

    limit = 6;
    imageIncrement = this.limit / 1;

    // limit = this.responsiveService.masonryLimit;
    // imageIncrement = this.limit / 1;

    public masonryOptions: NgxMasonryOptions = {

        // itemSelector: string;
        // columnWidth: number | string;
        // gutter: number;
        // percentPosition: boolean;
        // stamp: string;
        // fitWidth: boolean;
        // originLeft: boolean;
        // originTop: boolean;
        // containerStyle: string;
        // resize: boolean;
        // initLayout: boolean;
        // horizontalOrder: boolean;
        // animations: NgxMasonryAnimations;

        gutter: 0,
        percentPosition: true
    };

    // getDivWidth() {
    //     console.log('GALLERY: getDivWidth() triggered!');
    //     // return this.responsiveService.masonryDivWidth;
    //     // return this.responsiveService.getDivWidth();
    // }

    // getWindowWidth() {
    //     return window.innerWidth;
    // }
    // ========================= END MASONRY: defs =========================


    ngOnInit(): void {
        // console.log(Classic);
        // console.log('Classic.classic[1].FileName = ' + Classic.classic[1].FileName);
        // console.log('this.classicItems = ' + this.classicItems);

        // console.log('this.limit = ' + this.limit + '     this.imageIncrement = ' + this.imageIncrement);

        this.masonryImages = this.classicItems.slice(0, this.limit);

        // this.getDivWidth();
    }


    // ========================= FUNCTION: onScroll() =========================
    @HostListener('window:scroll', ['$event'])

    onScroll() {
        const galleryBtm = document.getElementById('masonryGridID').getBoundingClientRect().bottom;
        // console.log('galleryBtm = ' + galleryBtm);

        if (galleryBtm < window.innerHeight) {
        // if (galleryBtm <= (window.innerHeight * 0.975)) {
            this.showMoreImages();
        }
    }
    // ========================= END FUNCTION: onScroll() =========================


    // ========================= MASONRY: NAV =========================
    showMoreImages() {
        // this.limit += 9;
        this.limit += this.imageIncrement;
        this.masonryImages = this.classicItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.classicItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
    // ========================= END MASONRY: NAV =========================



    // // ========================= MASONRY: NAV =========================
    // thisUserAgent(userAgent: any) {
    //     console.log('userAgent ==========>', userAgent);
    //     this.userAgentData = userAgent;
    // }
}
