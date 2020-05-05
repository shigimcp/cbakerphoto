// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit } from '@angular/core';
// import { Input } from '@angular/core';

import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Men from '../../assets/data/json/men.json';


@Component({
    selector: 'app-men',
    templateUrl: './men.component.html',
    styleUrls: ['./men.component.scss']
})


export class MenComponent implements OnInit {

    title = 'Men';

    constructor() { }


    // ========================= MASONRY: defs =========================
    menItems: any[] = (Men as any).men;

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
        // console.log(Men);
        // console.log('Men.men[1].FileName = ' + Men.men[1].FileName);
        // console.log('this.menItems = ' + this.menItems);

        // console.log('this.limit = ' + this.limit + '     this.imageIncrement = ' + this.imageIncrement);

        this.masonryImages = this.menItems.slice(0, this.limit);
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
        this.masonryImages = this.menItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.menItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
    // ========================= END MASONRY: NAV =========================
}
