// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Women from '../../assets/data/json/women.json';

import { HostListener } from '@angular/core';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})


export class GalleryComponent implements OnInit {

    title: 'Gallery';

    constructor() { }

    womenItems: any[] = (Women as any).women;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];

    limit = 6;
    imageIncrment = this.limit / 2;

    public masonryOptions: NgxMasonryOptions = {
        gutter: 0,
    };


    // areas = ['masonryGridID'];
    // reached = false;
    // passed = false;

    @HostListener('window:scroll', ['$event'])

    onScroll() {

        // const activeElem = this.areas[Math.floor(window.pageYOffset / document.documentElement.clientHeight)];

        // console.log('activeElem = ' + activeElem);
        // console.log('this.masonry = ' + this.masonry);

        const galleryBtm = document.getElementById('masonryGridID').getBoundingClientRect().bottom;

        console.log('galleryBtm = ' + galleryBtm);

        if (galleryBtm <= window.innerHeight) {
        // if (galleryBtm <= (window.innerHeight * 0.975)) {
            this.showMoreImages();
        }

        // const elementPosition = this.areas.offsetTop;
        // console.log('elementPosition = ' + elementPosition);

        // const elementPosition = this.areas.nativeElement.offsetTop;
        // const elementHeight = this.areas.nativeElement.clientHeight;
        // const scrollPosition = window.pageYOffset;

        // // set 'true' when scrolling has reached current element
        // this.reached = scrollPosition >= elementPosition;

        // console.log('this.reached = ' + this.reached);

        // // set 'true' when scrolling has passed current element height
        // this.passed = scrollPosition >= (elementPosition + elementHeight);

        // console.log('this.passed = ' + this.passed);
    }


    ngOnInit(): void {
        // console.log(Women);
        // console.log('Women.classic[1].FileName = ' + Women.women[1].FileName);
        // console.log('this.womenItems = ' + this.womenItems);

        this.masonryImages = this.womenItems.slice(0, this.limit);
    }

    showMoreImages() {
        // this.limit += 9;
        this.limit += this.imageIncrment;
        this.masonryImages = this.womenItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.womenItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
}
