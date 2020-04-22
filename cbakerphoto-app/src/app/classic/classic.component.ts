// REF: https://github.com/wynfred/ngx-masonry
// REF: https://github.com/wynfred/ngx-masonry-demo

import { Component, OnInit } from '@angular/core';
// import { Input } from '@angular/core';

import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import * as Classic from '../../assets/data/json/classic.json';


@Component({
    selector: 'app-classic',
    templateUrl: './classic.component.html',
    styleUrls: ['./classic.component.scss']
})


export class ClassicComponent implements OnInit {

    title: 'Classic';
    // thisGallery: 'classic';

    // @Input() title;

    constructor() { }


    // ========================= MASONRY: defs =========================
    classicItems: any[] = (Classic as any).classic;

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
        // console.log(Classic);
        // console.log('Classic.classic[1].FileName = ' + Classic.classic[1].FileName);
        // console.log('this.classicItems = ' + this.classicItems);

        // console.log('this.limit = ' + this.limit + '     this.imageIncrment = ' + this.imageIncrment);

        this.masonryImages = this.classicItems.slice(0, this.limit);
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
}
