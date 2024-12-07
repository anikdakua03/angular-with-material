import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { Clerk } from "@clerk/clerk-js";
import { SignInProps } from '@clerk/clerk-js/dist/types/ui/types';
import { Theme } from '@clerk/types';

@Component({
    selector: 'app-material',
    imports: [MatSlideToggleModule, MatInputModule, MatSelectModule, MatDatepickerModule, ReactiveFormsModule, MatButtonModule, MatMenuModule, MatIconModule],
    providers: [provideNativeDateAdapter()],
    templateUrl: './material.component.html',
    styleUrl: './material.component.scss'
})
export class MaterialComponent {

  myForm !: FormGroup;

  key = "";

  clerk = new Clerk(this.key);

  signInTheme: Theme = {
    // baseTheme: ,
    layout: {
      logoImageUrl: "",
      logoLinkUrl: "",
      logoPlacement: "inside",
      socialButtonsPlacement: "bottom",
      showOptionalFields: true,
      socialButtonsVariant: "iconButton"
    },
    variables: {
      colorBackground: "white",
      fontSize: "1.2rem",
      fontWeight: {
        normal: 100,
        medium: 300,
        // semibold : 500,
        bold: 600
      },
      spacingUnit: "0.5rem"
    }
  }

  constructor(private fb: FormBuilder, private elRef: ElementRef) {
    this.initializeForm();

    this.clerk.load();

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

    const signinProp: SignInProps = {
      forceRedirectUrl: "string | null",
      fallbackRedirectUrl: "",
      signUpUrl: "string",
      appearance: this.signInTheme,
      initialValues: {
        emailAddress: "",
        phoneNumber: "",
        username: "",
      },
      waitlistUrl: "string",
      __experimental: {
        newComponents: true
      }
    };

    // 3 basics
    // this.clerk.openSignIn(signinProp);

    // this.clerk.openSignUp();
    // this.clerk.openUserProfile();

    // Mount the SignIn component on the div with a specific id
    // const signInDiv = this.elRef.nativeElement.querySelector('#clerk-signin');
    // this.clerk.mountSignIn(signInDiv);

    this.clerk.openGoogleOneTap();

    // this.clerk.openCreateOrganization(); // feature is turned off 

  }
}
