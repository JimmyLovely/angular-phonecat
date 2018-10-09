import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './components/app/app.component';
import { NextComponent } from './components/next/next.component';
import { ThirdComponent } from './components/third/third.component';
import { EmptyComponent } from "./components/empty/empty.component";
import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        UpgradeModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NextComponent,
        ThirdComponent,
        EmptyComponent
    ],
    exports: [],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    ngDoBootstrap() {
    }
}