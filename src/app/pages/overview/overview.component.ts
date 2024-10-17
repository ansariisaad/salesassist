import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SidebarComponent } from "../../layout/sidebar/sidebar.component";
@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [SharedModule, SidebarComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
