import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrl: './bottom-panel.component.scss'
})
export class BottomPanelComponent {
  panelOpenState: boolean = false;
  messageInput: string = "";
  constructor(private _snackBar: MatSnackBar) { }

  sendMessage() {
    this._snackBar.open("Message sent succesfully!", "Ok");
    this.messageInput = "";
  }

}
