import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NextComponent } from './components/nextComponent/next.component';
import { ThirdComponent } from './components/thirdComponent/third.component';

const routes: Routes = [{
    path: 'ng2', children: [
        { path: 'next', component: NextComponent },
        { path: 'third', component: ThirdComponent },
    ]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

