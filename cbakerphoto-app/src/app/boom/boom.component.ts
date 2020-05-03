// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit } from '@angular/core';
// import { Input } from '@angular/core';

import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Boom from '../../assets/data/json/boom.json';


@Component({
    selector: 'app-boom',
    templateUrl: './boom.component.html',
    styleUrls: ['./boom.component.scss']
})


export class BoomComponent implements OnInit {

    title = 'Boom Project';

    constructor() { }


    // ========================= MASONRY: defs =========================
    boomItems: any[] = (Boom as any).boom;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];

    limit = 6;
    imageIncrment = this.limit / 1;

    // limit = Math.round(0.333 * window.screen.width / 500);
    // imageIncrment = Math.round(this.limit / 1);

    public masonryOptions: NgxMasonryOptions = {
        gutter: 0,
    };
    // ========================= END MASONRY: defs =========================


    ngOnInit(): void {
        // console.log(Boom);
        // console.log('Boom.boom[1].FileName = ' + Boom.boom[1].FileName);
        // console.log('this.boomItems = ' + this.boomItems);

        // console.log('this.limit = ' + this.limit + '     this.imageIncrment = ' + this.imageIncrment);

        this.masonryImages = this.boomItems.slice(0, this.limit);
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
        this.limit += this.imageIncrment;
        this.masonryImages = this.boomItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.boomItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
    // ========================= END MASONRY: NAV =========================
}
