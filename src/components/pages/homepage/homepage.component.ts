import { Component } from '@angular/core';
import { Module } from '../../../models/settings';
import moment from 'moment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
    user: string = "Giuse";
modules:Module[] = [
  {
      "name":"pulizie",
      "icon":"mop"
  },
  {
      "name":"spesa",
      "icon":"shopping_cart"
  },
  {
      "name":"finanze",
      "icon":"payments"
  },
  {
      "name":"to-do",
      "icon":"list"
  },
  {
      "name":"coppia",
      "icon":"heart"
  },
  {
      "name":"eventi",
      "icon":"calendar"
  }
];


setMessage() {
    let msg = "";
    const currentHour = +moment().format("HH");
    if (currentHour >= 3 && currentHour < 12) {
      msg = "Buongiorno";
    } else if (currentHour >= 12 && currentHour < 16) {
      msg = "Buon pomeriggio";
    } else if (currentHour >= 16 && currentHour < 20) {
      msg = "Buonasera";
    } else if (currentHour >= 20) {
      msg = "Buonanotte";
    } else {
      msg = "Ciao"
    }
    msg = msg.concat(", ", this.user, "!")
    return msg;
  }

}
