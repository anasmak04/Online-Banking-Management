import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {createRegisterForm} from "../../core/validators/register-validators";
import {RegisterRequest} from "../../core/models/register-request.interface";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../core/stores/auth/auth.actions";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private store$: Store,) {}

  ngOnInit(): void {
    this.registerForm = createRegisterForm(this.fb);
  }

  onSubmit(){
    const formValues = this.registerForm.getRawValue();
    const register : RegisterRequest = {
      firstName : formValues.firstName,
      lastName : formValues.lastName,
      email : formValues.email,
      password : formValues.password,
      roles : ["USER"],
    }

    this.store$.dispatch(AuthActions.registerUser({register}));

  }

}
