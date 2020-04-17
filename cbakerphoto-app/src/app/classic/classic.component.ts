// REF: https://github.com/wynfred/ngx-masonry
// REF_NG: https://www.npmjs.com/package/ng-masonry-layout

import { Component, OnInit, ViewChild } from '@angular/core';
import * as Classic from '../../assets/data/json/classic.json';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';


@Component({
    selector: 'app-classic',
    templateUrl: './classic.component.html',
    styleUrls: ['./classic.component.scss']
})


export class ClassicComponent implements OnInit {

    title: 'JSON (local) & Masonry';

    classicItems: any[] = (Classic as any).classic;

    @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

    masonryImages: string[];
    limit = 9;

    public masonryOptions: NgxMasonryOptions = {
        gutter: 0,
        // percentPosition: true,
        // fitWidth: true,
        // originLeft: true,
        // originTop: true,
        // originLeft: false,
        // originTop: false,
    };

    constructor() { }

    ngOnInit(): void {
        console.log(Classic);
        console.log('Classic.classic[1].FileName = ' + Classic.classic[1].FileName);
        console.log('this.classicItems = ' + this.classicItems);

        // this.masonryImages = this.dummyPictures.slice(0, this.limit);
        this.masonryImages = this.classicItems.slice(0, this.limit);
        // this.classicItems = this.classicItems.slice(0, this.limit);
    }

    showMoreImages() {
        this.limit += 15;
        // this.masonryImages = this.dummyPictures.slice(0, this.limit);
        this.masonryImages = this.classicItems.slice(0, this.limit);
        // this.classicItems = this.classicItems.slice(0, this.limit);
    }

    insertImage() {
        // this.masonryImages.splice(0, 0, this.dummyPictures[0]);
        this.masonryImages.splice(0, 0, this.classicItems[0]);
        // this.classicItems.splice(0, 0, this.classicItems[0]);
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    removeImage() {
        this.masonryImages.pop();
        // this.classicItems.pop();
    }
}
