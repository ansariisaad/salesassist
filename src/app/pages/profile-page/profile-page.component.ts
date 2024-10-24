import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProfileData {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string; 
  photoUrl: string;
  mobile: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfileComponent {
  profile: ProfileData = {
    name: 'Sofia',
    role: 'Super Admin',
    email: 'test@gmail.com',
    phone: '+1 (555) 123-4567',
    location: 'Mumbai India',
    mobile: '+91 1112223334',
    photoUrl: 'assets/admin-img/undraw_Female_avatar_efig-removebg-preview.png' // Default photo path
  };

  defaultPhotoUrl = 'assets/admin-img/undraw_Female_avatar_efig-removebg-preview.png';

  onImageError() {
    this.profile.photoUrl = this.defaultPhotoUrl;
  }
}