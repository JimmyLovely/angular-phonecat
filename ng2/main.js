"use strict";
/// <reference path="../node_modules/@angular/core" />
/// <reference path="../node_modules/@angular/common" />
/// <reference path="../node_modules/@angular/router" />
/// <reference path="../node_modules/@angular/forms" />
/// <reference path="../node_modules/@angular/http" />
/// <reference path="../node_modules/@angular/compiler" />
/// <reference path="../node_modules/@angular/platform-browser" />
/// <reference path="../node_modules/@angular/platform-browser-dynamic" />
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var static_1 = require("@angular/upgrade/static");
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    var upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
});
