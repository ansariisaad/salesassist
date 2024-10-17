// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarService } from '../../utils/sidebar.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private sidebarService: SidebarService) {}
  isDropdownOpen = false;

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar(); // Toggle sidebar state via service
  }


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
