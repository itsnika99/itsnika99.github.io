import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  hasNotification: boolean = false;



  openSettings() {
    console.log("settings")
  }
  openNotifications() {
    this.hasNotification = !this.hasNotification;
  }


}
