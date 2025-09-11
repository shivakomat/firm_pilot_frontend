import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // Check if user has authentication token
        const authToken = localStorage.getItem('authToken');
        
        if (authToken) {
            // Check user role and redirect accordingly
            const currentUser = localStorage.getItem('currentUser');
            if (currentUser) {
                try {
                    const user = JSON.parse(currentUser);
                    const userRole = user.role?.toLowerCase();
                    
                    // If client trying to access admin areas, redirect to client portal
                    if (userRole === 'client' && !state.url.includes('client-portal')) {
                        this.router.navigate(['/client-portal']);
                        return false;
                    }
                    
                    // If admin trying to access client portal, redirect to dashboard
                    if (userRole !== 'client' && state.url.includes('client-portal')) {
                        this.router.navigate(['/dashboard']);
                        return false;
                    }
                } catch (error) {
                    console.error('Error parsing user data:', error);
                }
            }
            
            return true;
        }

        // Not logged in, redirect to login page with the return url
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
