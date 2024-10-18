import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SidebarComponent } from "../../layout/sidebar/sidebar.component";
import { FooterComponent } from "../../layout/footer/footer.component";
@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [SharedModule, SidebarComponent, FooterComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
