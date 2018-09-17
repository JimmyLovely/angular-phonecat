import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { NextComponent } from './components/nextComponent/next.component';

import { AppRoutingModule } from './app.routing';



@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NextComponent
    ],
    exports: [],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}