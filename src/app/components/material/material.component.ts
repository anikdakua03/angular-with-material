import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [MatSlideToggleModule, MatInputModule, MatSelectModule, MatDatepickerModule, ReactiveFormsModule, MatButtonModule, MatMenuModule, MatIconModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss',
})
export class MaterialComponent {

  myForm !: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }

  initializeForm() {
    this.myForm = this.fb.group({
      email: new FormControl("", Validators.email),
      option: new FormControl(),
      someDate: new FormControl()
    });
  }

  submitForm() {
    console.log("my form value : ", this.myForm);
  }
}
