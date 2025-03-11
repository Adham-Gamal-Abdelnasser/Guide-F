import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-doctorprofile',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './doctorprofile.component.html',
  styleUrl: './doctorprofile.component.css'
})
export class DoctorprofileComponent {

}
