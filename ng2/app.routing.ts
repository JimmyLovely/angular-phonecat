import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NextComponent } from './components/nextComponent/next.component';

const routes: Routes = [
    {
        path: 'next',
        component: NextComponent
    }, {
        path: 'app',
        component: AppComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
