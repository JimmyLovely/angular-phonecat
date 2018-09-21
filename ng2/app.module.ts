import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './components/app/app.component';
import { NextComponent } from './components/nextComponent/next.component';
import { ThirdComponent } from './components/thirdComponent/third.component';
import { AppRoutingModule } from './app.routing';

declare var angular: angular.IAngularStatic;


@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        UpgradeModule
    ],
    declarations: [
        AppComponent,
        NextComponent,
        ThirdComponent
    ],
    entryComponents:[
        AppComponent
    ],
    exports: [],
    providers: []
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, ['phonecatApp'], {strictDi: true});
    }
}