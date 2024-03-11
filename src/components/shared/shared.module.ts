import { NotificationComponent } from './notification/notification.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    NotificationComponent,
    FooterComponent,
    BottomPanelComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    ButtonComponent,
    NotificationComponent,
    FooterComponent
  ]
})
export class SharedModule { }
