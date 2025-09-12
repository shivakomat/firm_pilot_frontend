import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const currentUser = localStorage.getItem('currentUser');
        
        if (!currentUser) {
            this.router.navigate(['/auth/login']);
            return false;
        }

        try {
            const user = JSON.parse(currentUser);
            const userRole = user.role?.toLowerCase();
            const requiredRole = route.data['role']?.toLowerCase();

            if (requiredRole && userRole !== requiredRole) {
                // Redirect based on user role
                if (userRole === 'client') {
                    this.router.navigate(['/client-portal']);
                } else {
                    this.router.navigate(['/dashboards/default']);
                }
                return false;
            }

            return true;
        } catch (error) {
            console.error('Error parsing user data:', error);
            this.router.navigate(['/auth/login']);
            return false;
        }
    }
}
