import { Component, Input } from '@angular/core';
import { Module } from '../../../models/settings';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
 
  @Input() module!:Module;
notifications:any = {count:7}
  open(){
    
  }
}
