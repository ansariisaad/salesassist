import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MasterService } from '../../service/master.service';
import { Distributors } from '../../model/class/distributor';
import { dealers } from '../../model/class/dealers';
import { DealerResponse } from '../../model/interface/master';
import { error } from 'console';

interface Distributor {
  distributor_id: string;
  dist_name: string;
  dist_role: string;
  dist_email: string;
  dist_password: string;
  d_code: string;
  branch_name: string;
  pincode: number;
  created_at: string;
  updated_at: string;
}

interface DistributorResponse {
  totalDists: number;
  totalPages: number;
  currentPage: number;
  distributors: Distributor[];
}

@Component({
  selector: 'app-dealer',
  standalone: true,
  imports: [CommonModule, SharedModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css'],
})
export class DealerComponent implements OnInit {
  private http = inject(HttpClient);
  dealerList = signal<dealers[]>([]);
  masterSrv = inject(MasterService);

  users: Distributor[] = [];
  displayedUsers: Distributor[] = [];
  selectedRowCount = 3;
  isLoading = false;
  newDistributorList: Distributors = new Distributors();
  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  rowOptions = [1, 2, 5, 10, 20, 30, 50];

  ngOnInit(): void {
    // this.fetchDealerData();
    this.getAllDealer();

  }

  updateDisplayedUsers() {
    this.displayedUsers = this.users.slice(0, this.selectedRowCount);
  }

  // fetchDealerData() {
  //   const token = sessionStorage.getItem('adminToken');
  //   const apiUrl = 'https://dinosaur-cute-lightly.ngrok-free.app/api/superAdmin/distributors/all';
  //   const headers = new HttpHeaders()
  //     .set('authorization', `Bearer ${token}`)
  //     .set('accept', 'application/json');
  //     this.isLoading = true;

  //     this.http.get<DistributorResponse>(apiUrl, { headers }).subscribe({
  //       next: (response) => {
  //         this.isLoading = false; // Set loading to false after data is fetched
  //         if (response && response.distributors) {
  //           this.users = response.distributors;
  //           this.updateDisplayedUsers();
  //           console.log('Dealer data fetched successfully:', this.users);
  //         } else {
  //         console.error('Unexpected response structure:', response);
  //       }
  //     },
  //     error: (error) => {
  //       // this.isLoading = false; // Set loading to false if there is an error
  //       console.error('Error fetching dealer data:', error);
  //     }
  //   });
  // }

  

  getAllDealer() {
    this.masterSrv.getAllDealer().subscribe(
      (res: DealerResponse) => {
        this.dealerList.set(res.dealers);
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  createNewDist() {
    this.masterSrv.createDist(this.newDistributorList).subscribe(
      (res: any) => {
        alert('new Distributor Created');
        this.newDistributorList = new Distributors();
      },
      (error) => {
        alert('server Error');
      }
    );
  }
}
