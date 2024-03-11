import { Component, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  isPanelOpen: boolean = false;
  @ViewChild(MatExpansionPanel) expansionPanel!: MatExpansionPanel;

  setMessage() {
    let msg = "ciao susino bello :)";
    return msg;
  }


  togglePanel() {
    if (this.isPanelOpen) {
      this.expansionPanel.close()
    } else {
      this.expansionPanel.open()
    }

  }



}
