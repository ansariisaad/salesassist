import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-dealer',
  standalone: true,
  imports: [CommonModule , SharedModule],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent { 
  users = [
    { index: '1', name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011/04/25', salary: '$320,800' },
    { index: '2', name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: '$170,750' },
    { index: '3', name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, startDate: '2009/01/12', salary: '$86,000' },
    { index: '4', name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, startDate: '2012/03/29', salary: '$433,060' },
    { index: '5', name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, startDate: '2008/11/28', salary: '$162,700' },
    { index: '6', name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: 61, startDate: '2012/12/02', salary: '$372,000' },
    { index: '7', name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, startDate: '2012/08/06', salary: '$137,500' },
    { index: '8', name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', age: 55, startDate: '2010/10/14', salary: '$327,900' },
    { index: '9', name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, startDate: '2009/09/15', salary: '$205,500' },
    { index: '10', name: 'Sonya Frost', position: 'Software Engineer', office: 'Edinburgh', age: 23, startDate: '2008/12/13', salary: '$103,600' }
    ,{ index: '11', name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, startDate: '2012/03/29', salary: '$433,060' },
    { index: '12', name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, startDate: '2008/11/28', salary: '$162,700' },
    { index: '13', name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: 61, startDate: '2012/12/02', salary: '$372,000' },
    { index: '14', name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, startDate: '2012/08/06', salary: '$137,500' },
    { index: '15', name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', age: 55, startDate: '2010/10/14', salary: '$327,900' },
    { index: '16', name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, startDate: '2009/09/15', salary: '$205,500' },
    { index: '17', name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, startDate: '2012/08/06', salary: '$137,500' },
    { index: '18', name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', age: 55, startDate: '2010/10/14', salary: '$327,900' },
    { index: '19', name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, startDate: '2009/09/15', salary: '$205,500' },
    { index: '20', name: 'Sonya Frost', position: 'Software Engineer', office: 'Edinburgh', age: 23, startDate: '2008/12/13', salary: '$103,600' }
    ,{ index: '21', name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, startDate: '2012/03/29', salary: '$433,060' },
    { index: '22', name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, startDate: '2008/11/28', salary: '$162,700' },
    { index: '23', name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: 61, startDate: '2012/12/02', salary: '$372,000' },
    { index: '24', name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, startDate: '2012/08/06', salary: '$137,500' },
    { index: '25', name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', age: 55, startDate: '2010/10/14', salary: '$327,900' },
    { index: '26', name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, startDate: '2009/09/15', salary: '$205,500' }
    
  ];

  // Default number of users to display
  selectedRowCount = 5;
  
  // The users that will be displayed
  displayedUsers = this.users.slice(0, this.selectedRowCount);
  
  // Array of options for the select dropdown
  rowOptions = [5, 10, 20, 30, 50];
  
  // Method to update the displayed users when the dropdown changes
  updateDisplayedUsers() {
    this.displayedUsers = this.users.slice(0, this.selectedRowCount);
  }
}

