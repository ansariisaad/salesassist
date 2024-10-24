import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = sessionStorage.getItem('adminToken');

  if (token) { 
    return true;
  } else { 
    router.navigateByUrl('login');
    return false;
  }
};

