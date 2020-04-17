import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NavComponent } from './nav/nav.component';
import { ParseCSVComponent } from './parse-csv/parse-csv.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClassicComponent } from './classic/classic.component';

import { MasonryComponent } from './masonry/masonry.component';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({

    declarations: [
        AppComponent,
        NavComponent,
        ParseCSVComponent,
        HomeComponent,
        AboutComponent,
        MasonryComponent,
        ClassicComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        NgxMasonryModule
    ],

    providers: [],

    bootstrap: [AppComponent]
})

export class AppModule { }
