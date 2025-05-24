import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PaymentComponent } from "./components/payment/payment.component";

@Component({
    selector: 'app-root',
  imports: [MatMenuModule, MatIconModule, MatButtonModule, PaymentComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-with-material';

}
