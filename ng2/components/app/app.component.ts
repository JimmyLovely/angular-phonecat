import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
    selector: 'ng2-app',
    templateUrl: '/ng2/components/app/app.component.html'
})
export class AppComponent {
    constructor() { }
}


// ng1
declare var angular: angular.IAngularStatic;
angular.module('phonecatApp').directive(
    'ng2App',
    downgradeComponent({component: AppComponent}) as angular.IDirectiveFactory
)
