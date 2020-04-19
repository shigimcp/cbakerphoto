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

import { HttpClientModule } from '@angular/common/http';
import { NgxMasonryModule } from 'ngx-masonry';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { BoomComponent } from './boom/boom.component';
import { ClassicComponent } from './classic/classic.component';
import { FitnessComponent } from './fitness/fitness.component';
import { LifeComponent } from './life/life.component';
import { MenComponent } from './men/men.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { StillComponent } from './still/still.component';
import { WomenComponent } from './women/women.component';


@NgModule({

    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        AboutComponent,
        BoomComponent,
        ClassicComponent,
        FitnessComponent,
        LifeComponent,
        MenComponent,
        PortraitsComponent,
        StillComponent,
        WomenComponent,
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
