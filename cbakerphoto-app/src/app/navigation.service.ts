// REF: https://stackoverflow.com/questions/52946051/angular-how-can-i-toggle-the-visibility-of-an-element-in-a-component-from-anot/52946450

import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class NavigationService {

    galleryImages = [];

    constructor() { }

}
