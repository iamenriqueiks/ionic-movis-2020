import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthPage} from './auth.page';

const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        children: [
            {path: '', redirectTo: 'cars-list', pathMatch: 'full'},
            {path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)},
            {path: 'cars-list', loadChildren: () => import('../cars-list/cars-list.module').then(m => m.CarsListPageModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthPageRoutingModule {
}
