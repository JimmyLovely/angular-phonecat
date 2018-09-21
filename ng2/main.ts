/// <reference path="../node_modules/@angular/core" />
/// <reference path="../node_modules/@angular/common" />
/// <reference path="../node_modules/@angular/router" />
/// <reference path="../node_modules/@angular/forms" />
/// <reference path="../node_modules/@angular/http" />
/// <reference path="../node_modules/@angular/compiler" />
/// <reference path="../node_modules/@angular/platform-browser" />
/// <reference path="../node_modules/@angular/platform-browser-dynamic" />


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['phonecatApp'], {strictDi: true});
});
