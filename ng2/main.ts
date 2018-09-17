/// <reference path="../node_modules/@angular/core" />
/// <reference path="../node_modules/@angular/common" />
/// <reference path="../node_modules/@angular/router" />
/// <reference path="../node_modules/@angular/forms" />
/// <reference path="../node_modules/@angular/http" />
/// <reference path="../node_modules/@angular/compiler" />
/// <reference path="../node_modules/@angular/platform-browser" />
/// <reference path="../node_modules/@angular/platform-browser-dynamic" />


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)