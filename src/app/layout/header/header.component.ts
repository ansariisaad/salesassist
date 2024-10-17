// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarService } from '../../utils/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar(); // Toggle sidebar state via service
  }
}
