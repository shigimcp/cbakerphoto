// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit } from '@angular/core';
// import { Input } from '@angular/core';

import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Life from '../../assets/data/json/life.json';


@Component({
    selector: 'app-life',
    templateUrl: './life.component.html',
    styleUrls: ['./life.component.scss']
})


export class LifeComponent implements OnInit {

    title = 'Life';

    constructor() { }


    // ========================= MASONRY: defs =========================
    lifeItems: any[] = (Life as any).life;

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
        // console.log(Life);
        // console.log('Life.life[1].FileName = ' + Life.life[1].FileName);
        // console.log('this.lifeItems = ' + this.lifeItems);

        // console.log('this.limit = ' + this.limit + '     this.imageIncrement = ' + this.imageIncrement);

        this.masonryImages = this.lifeItems.slice(0, this.limit);
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
        this.masonryImages = this.lifeItems.slice(0, this.limit);
    }

    insertImage() {
        this.masonryImages.splice(0, 0, this.lifeItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
    }
    // ========================= END MASONRY: NAV =========================
}
