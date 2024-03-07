import { NotificationComponent } from './notification/notification.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    NotificationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    ButtonComponent,
    NotificationComponent,
    FooterComponent
  ]
})
export class SharedModule { }
