// REF: https://www.techiediaries.com/angular/angular-9-renderer2-directives-tutorial-example/
// REF: https://stackoverflow.com/questions/55777845/how-do-i-check-if-the-user-has-scrolled-down-or-crossed-to-a-particular-eleme

import { Directive } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';


@Directive({
    selector: '[appScrollTo]',
    exportAs: 'scrolledTo', // allows directive to be targeted by a template reference variable
})


export class ScrollToDirective {

    reached = false;
    passed = false;

    constructor(public el: ElementRef) { }

    @HostListener('window:scroll', ['$event'])

    onWindowScroll() {
        const elementPosition = this.el.nativeElement.offsetTop;
        const elementHeight = this.el.nativeElement.clientHeight;
        const scrollPosition = window.pageYOffset;

        // set 'true' when scrolling has reached current element
        this.reached = scrollPosition >= elementPosition;

        console.log('this.reached = ' + this.reached);

        // set 'true' when scrolling has passed current element height
        this.passed = scrollPosition >= (elementPosition + elementHeight);

        console.log('this.passed = ' + this.passed);
    }
}


