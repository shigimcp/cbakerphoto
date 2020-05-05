// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit } from '@angular/core';
// import { Input } from '@angular/core';

import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Still from '../../assets/data/json/still.json';


@Component({
    selector: 'app-still',
    templateUrl: './still.component.html',
    styleUrls: ['./still.component.scss']
})


export class StillComponent implements OnInit {

    title = 'Still';

    constructor() { }


    // ========================= MASONRY: defs =========================
    stillItems: any[] = (Still as any).still;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];

    limit = 6;
    imageIncrement = this.limit / 1;

    // limit = Math.round(0.333 * window.screen.width / 500);
    // imageIncrement = Math.round(this.limit / 1);

    public masonryOptions: NgxMasonryOptions = {
        gutter: 0,
    };
    // ========================= END MASONRY: defs =========================


    ngOnInit(): void {
        // console.log(Still);
        // console.log('Still.still[1].FileName = ' + Still.still[1].FileName);
        // console.log('this.stillItems = ' + this.stillItems);

        // console.log('this.limit = ' + this.limit + '     this.imageIncrement = ' + this.imageIncrement);

        this.masonryImages = this.stillItems.slice(0, this.limit);
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
        this.masonryImages = this.stillItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.stillItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
    // ========================= END MASONRY: NAV =========================
}
