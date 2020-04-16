import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataService } from '../data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit, OnDestroy {

    // products: any = [];
    boom: any = [];

    destroy$: Subject<boolean> = new Subject<boolean>();


    constructor(private dataService: DataService) { }


    ngOnInit(): void {

        // // this.dataService.sendGetRequest().subscribe((data: any[]) => {
        // this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {

        //     console.log('HOME/ngOnInit: data = ');
        //     console.log(data);

        //     // this.products = data;
        //     this.boom = data;
        // });


        this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {

            console.log('HOME/ngOnInit: res = ');
            console.log(res);

            this.boom = res.body;
        });

    }


    ngOnDestroy() {

        console.log('HOME/ngOnDestroy triggered!');

        this.destroy$.next(true);

        // Unsubscribe from the subject
        this.destroy$.unsubscribe();
    }


    public firstPage() {
        this.boom = [];

        // tslint:disable-next-line: max-line-length
        this.dataService.sendGetRequestToUrl(this.dataService.first).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
            console.log(res);
            this.boom = res.body;
        });
    }
    public previousPage() {

        if (this.dataService.prev !== undefined && this.dataService.prev !== '') {
            this.boom = [];

            // tslint:disable-next-line: max-line-length
            this.dataService.sendGetRequestToUrl(this.dataService.prev).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
                console.log(res);
                this.boom = res.body;
            });
        }

    }
    public nextPage() {
        if (this.dataService.next !== undefined && this.dataService.next !== '') {
            this.boom = [];

            // tslint:disable-next-line: max-line-length
            this.dataService.sendGetRequestToUrl(this.dataService.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
                console.log(res);
                this.boom = res.body;
            });
        }
    }
    public lastPage() {
        this.boom = [];

        // tslint:disable-next-line: max-line-length
        this.dataService.sendGetRequestToUrl(this.dataService.last).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
            console.log(res);
            this.boom = res.body;
        });
    }
}
