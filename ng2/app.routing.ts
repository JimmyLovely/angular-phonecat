import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextComponent } from './components/next/next.component';
import { ThirdComponent } from './components/third/third.component';
import { EmptyComponent } from './components/empty/empty.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: NextComponent
}, {
    path: 'ng2/next',
    component: NextComponent
}, {
    path: 'ng2/third',
    component: ThirdComponent
}, {
    path: '**',
    component: EmptyComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

