import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  @Input() isLoggedIn: boolean | null = null;
  @Input() menuItems: MenuItem[] = [];
  @Input() title = '';

  @Output() private logout = new EventEmitter();

  onLogout(): void {
    this.logout.emit();
  }
}
