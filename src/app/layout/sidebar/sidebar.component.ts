import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarService } from '../../utils/sidebar.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public isSidebarOpen: boolean = true; // Default sidebar state
  public sidebarService: SidebarService; // Make sidebarService public
  isDropdownOpen = false;
  router: any;

  constructor(sidebarService: SidebarService) {
    this.sidebarService = sidebarService; // Inject the service in the constructor
  }

  ngOnInit(): void {
    // Subscribe to the sidebar state from the service
    this.sidebarService.sidebarState$.subscribe(state => {
      this.isSidebarOpen = state; // Update local state whenever it changes
    });
  }


  // Toggle the dropdown
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isCollapsed: boolean[] = [true, true, true]; // Initially, all items are collapsed

  // Toggle the collapse state of a specific item
  toggleCollapse(index: number): void {
    this.isCollapsed[index] = !this.isCollapsed[index];
  }
   
}
