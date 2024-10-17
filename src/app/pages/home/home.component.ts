import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
    templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isSidebarOpen = true; // Sidebar is open by default

  // Function to toggle the sidebar
  toggleSidebar(): void {
    // debugger
    console.log("It is not working")
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}

