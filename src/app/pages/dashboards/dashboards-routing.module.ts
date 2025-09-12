import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { SaasComponent } from './saas/saas.component';
import { CryptoComponent } from './crypto/crypto.component';
import { BlogComponent } from './blog/blog.component';
import { JobsComponent } from "./jobs/jobs.component";
import { RoleGuard } from '../../core/guards/role.guard';

const routes: Routes = [
    {
        path: 'default',
        component: DefaultComponent,
        canActivate: [RoleGuard],
        data: { role: 'ACCOUNTANT' }
    },
    {
        path: 'saas',
        component: SaasComponent
    },
    {
        path: 'crypto',
        component: CryptoComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path:"jobs",
        component:JobsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
