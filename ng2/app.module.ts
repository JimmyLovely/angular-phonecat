import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UrlHandlingStrategy, UrlTree, RouterModule } from '@angular/router';

import { UpgradeModule } from '@angular/upgrade/static';

class HybridUrlHandlingStrategy implements UrlHandlingStrategy {
    // use only process the `/ng2` url
    shouldProcessUrl(url: UrlTree) { return url.toString().startsWith('/ng2'); }
    extract(url: UrlTree) { return url; }
    merge(url: UrlTree, whole: UrlTree) { return url; }
}

import { AppComponent } from './components/app/app.component';
import { NextComponent } from './components/nextComponent/next.component';
import { ThirdComponent } from './components/thirdComponent/third.component';
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
        ThirdComponent
    ],
    exports: [],
    providers: [
        // use custom url handling strategy
        { provide: UrlHandlingStrategy, useClass: HybridUrlHandlingStrategy }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    ngDoBootstrap() {
    }
}