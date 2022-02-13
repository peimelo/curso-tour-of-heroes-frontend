import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/services/auth.service';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;
  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      routerLink: '/dashboard',
      toolTipText: 'Dashboard',
    },
    {
      icon: 'sports_martial_arts',
      routerLink: '/heroes',
      toolTipText: 'Heroes',
    },
  ];
  title = 'Tour of Heroes';

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  onLogout(): void {
    this.authService.logout();
  }
}
