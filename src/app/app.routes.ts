import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './extrapages/page404/page404.component';
import { CyptolandingComponent } from './cyptolanding/cyptolanding.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layouts/layout.component';
import { ClientRegistrationComponent } from './pages/invitations/client-registration/client-registration.component';
import { MarketingHomepageComponent } from './pages/marketing/marketing-homepage.component';

export const routes: Routes = [
    // Marketing Homepage (Public)
    {
        path: "",
        component: MarketingHomepageComponent,
    },
    // Authentication routes
    {
        path: "account",
        loadChildren: () =>
            import("./account/account.module").then((m) => m.AccountModule),
    },
    // Legacy auth path for backward compatibility
    {
        path: "auth",
        redirectTo: "account",
        pathMatch: "full"
    },
    // Client registration
    {
        path: "register/:token",
        component: ClientRegistrationComponent,
    },
    // Main application dashboard (Protected)
    {
        path: "dashboard",
        component: LayoutComponent,
        loadChildren: () =>
            import("./pages/pages.module").then((m) => m.PagesModule),
        canActivate: [AuthGuard],
    },
    // Client portal (Protected)
    {
        path: "client-portal",
        loadComponent: () => import("./pages/client-portal/client-portal-app-layout/client-portal-app-layout.component").then(c => c.ClientPortalAppLayoutComponent),
        loadChildren: () =>
            import("./pages/client-portal/client-portal.module").then((m) => m.ClientPortalModule),
        canActivate: [AuthGuard],
    },
    // Extra pages (Protected)
    {
        path: "pages",
        loadChildren: () =>
            import("./extrapages/extrapages.module").then((m) => m.ExtrapagesModule),
        canActivate: [AuthGuard],
    },
    // Legacy crypto landing
    { path: "crypto-ico-landing", component: CyptolandingComponent },
    // 404 page
    { path: "**", component: Page404Component },
];
