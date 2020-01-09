import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthPage} from './auth.page';

const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthPageRoutingModule {
}
