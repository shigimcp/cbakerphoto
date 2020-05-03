// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit } from '@angular/core';
// import { Input } from '@angular/core';

import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Portraits from '../../assets/data/json/portraits.json';


@Component({
    selector: 'app-portraits',
    templateUrl: './portraits.component.html',
    styleUrls: ['./portraits.component.scss']
})


export class PortraitsComponent implements OnInit {

    title = 'Portraits';

    constructor() { }


    // ========================= MASONRY: defs =========================
    portraitsItems: any[] = (Portraits as any).portraits;

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
        // console.log(Portraits);
        // console.log('Portraits.portraits[1].FileName = ' + Portraits.portraits[1].FileName);
        // console.log('this.portraitsItems = ' + this.portraitsItems);

        // console.log('this.limit = ' + this.limit + '     this.imageIncrment = ' + this.imageIncrment);

        this.masonryImages = this.portraitsItems.slice(0, this.limit);
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
        this.masonryImages = this.portraitsItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.portraitsItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
    // ========================= END MASONRY: NAV =========================
}
